import db from "../database/database";
import { Carrier } from "../protocols/protocols";


export async function getCarrierId(id: number){
    const result = await db.query<Carrier>(`SELECT * FROM carriers WHERE id = $1`,[id]);
    return result.rows[0];
}