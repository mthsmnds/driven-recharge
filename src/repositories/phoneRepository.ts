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