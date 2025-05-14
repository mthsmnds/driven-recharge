import { InsertPhone } from "../protocols/protocols";
import { addPhoneRepo } from "../repositories/phoneRepository";


export async function addPhoneService(phoneData: InsertPhone){
    const result = await addPhoneRepo(phoneData);
    return result;
}
