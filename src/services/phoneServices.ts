import { InsertPhone } from "../protocols/protocols";
import { addPhoneRepo, getPhoneByCpf } from "../repositories/phoneRepository";


export async function addPhoneService(phoneData: InsertPhone){
    const existingPhones = await getPhoneByCpf(phoneData.cpf);

    if (existingPhones.length >= 3){
        throw{
            type: "conflict",
            message: "Cliente já possui 3 telefones cadastrados"
        }
    }

    const result = await addPhoneRepo(phoneData);
    return result;
}


