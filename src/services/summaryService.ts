import { PhoneRecharges, Summary } from "../protocols/protocols";
import { getPhoneByCpf } from "../repositories/phoneRepository";
import { getRechargeRepo } from "../repositories/rechargeRepository";
import { getCarrierId } from "../repositories/summaryRepository";


export async function getSummaryService(cpf: string): Promise<Summary>{
    const phones = await getPhoneByCpf(cpf);

    const phoneWithDetails: PhoneRecharges[] = [];

    for(const phone of phones){
        const carrier = await getCarrierId(phone.carrier_id);
        const recharges = await getRechargeRepo(phone.id);

        const phoneDetails: PhoneRecharges ={
            id: phone.id,
            number: phone.number,
            cpf: phone.cpf,
            description: phone.description,
            carrier: carrier,
            recharges: recharges
        };
        
        phoneWithDetails.push(phoneDetails);
    }

    return {cpf:cpf, phones: phoneWithDetails};

}