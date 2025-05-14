import { InsertRecharge, Recharge } from "../protocols/protocols";
import db from "../database/database";

export async function addRechargeRepo(recharge: InsertRecharge){
    const {phone_id, value} = recharge;
    const result = await db.query<Recharge>(`
        INSERT INTO recharges (phone_id, value)
        VALUES ($1, $2)
        RETURNING *;
        `,[phone_id, value]);
    return result.rows[0];
}

export async function getRechargeRepo(phone_id: number){
    const result = await db.query<Recharge>(`
        SELECT * FROM recharges WHERE phone_id = $1`, [phone_id]);
    return result.rows;
}