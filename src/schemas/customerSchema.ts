import joi from "joi";
import { Customer } from "../protocols/protocols";

const customerSchema = joi.object<Customer>({
    cpf: joi.string().length(11).required(),
    name: joi.string().required()
})

export default customerSchema;