import joi from "joi";
import { InsertRecharge } from "../protocols/protocols";

const rechargeSchema = joi.object<InsertRecharge>({
    phone_id: joi.number().required(),
    value: joi.number().min(10).max(1000).required()
})

export default rechargeSchema;