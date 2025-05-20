import { InsertPhone } from "../protocols/protocols";
import { addPhoneRepo, getPhoneByCpf, getPhoneByNumber } from "../repositories/phoneRepository";


export async function addPhoneService(phoneData: InsertPhone) {

    const existingNumber = await getPhoneByNumber(phoneData.number);
    if (existingNumber) {
        throw {
            type: "conflict",
            message: "Número já cadastrado"
        }
    }

    const existingCpf = await getPhoneByCpf(phoneData.cpf);
    if (existingCpf.length >= 3) {
        throw {
            type: "conflict",
            message: "Cliente já possui 3 telefones cadastrados"
        }
    }

    const result = await addPhoneRepo(phoneData);
    return result;
}

export async function getPhoneService(cpf: string) {
    const phoneList = await getPhoneByCpf(cpf);

    if (phoneList.length === 0) {
        throw {
            type: "not_found",
            message: "Nenhum telefone cadastrado com esse CPF"
        }
    }
    return phoneList;
}


