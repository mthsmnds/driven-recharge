import db from "../database/database";
import { Customer } from "../protocols/protocols";


export async function addCustomerRepo(customer: Customer){
    const {cpf, name} = customer;
    const result = await db.query<Customer>(`
        INSERT INTO customers (cpf, name)
        VALUES ($1, $2)
        RETURNING *;
        `,[cpf, name]);
    return result.rows[0];

}