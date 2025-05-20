import joi from "joi";
import { InsertPhone } from "../protocols/protocols";

const phoneSchema = joi.object<InsertPhone>({
    number: joi.string().required(),
    carrier_id: joi.number().required(),
    name: joi.string().required(),
    cpf: joi.string().length(11).required(),
    description: joi.string().required()
})

export default phoneSchema;