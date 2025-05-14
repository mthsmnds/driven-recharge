import db from "../database/database";
import { InsertPhone, Phone } from "../protocols/protocols";

export async function addPhoneRepo(phone: InsertPhone){
    const {number, carrier_id, cpf, description} = phone;
    const result = await db.query<Phone>(`
        INSERT INTO phones (number, carrier_id, cpf, description)
        VALUES ( $1, $2, $3, $4)
        RETURNING *;
        `, [number, carrier_id, cpf, description]);
    return result.rows[0];
}

export async function getPhoneByCpf(cpf: string){
    const result = await db.query(`SELECT * FROM phones WHERE cpf = $1`, [cpf]);
    return result.rows;
}