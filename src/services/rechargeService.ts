import { addRechargeRepo, getRechargeRepo } from "../repositories/rechargeRepository";
import { InsertRecharge } from "../protocols/protocols";
import { getPhoneById, getPhoneByNumber } from "../repositories/phoneRepository";


export async function addRechargeService(recharge: InsertRecharge){
    const phone = await getPhoneById(recharge.phone_id);
    if(!phone){
        throw{
            type: "not_found",
            message: "Telefone não encontrado"
        }
    }

    return await addRechargeRepo(recharge);
}

export async function getRechargeService(number: string){
    const phone = await getPhoneByNumber(number);
    if(!phone){
        throw{
            type: "not_found",
            message: "Telefone não encontrado"
        }
    }

    return await getRechargeRepo(phone.id);
}