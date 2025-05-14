import { Customer } from "../protocols/protocols";
import { addCustomerRepo } from "../repositories/customerRepository";


export async function addCustomerService(customerData: Customer){
    const result = await addCustomerRepo(customerData);
    return result;
}