import { Request, Response } from "express";
import { Customer } from "../protocols/protocols";
import { addCustomerService } from "../services/customerService";
import httpStatus from "http-status"

export async function addCustomerController(req: Request, res: Response){
    const customer = req.body as Customer;
    await addCustomerService(customer);

    res.sendStatus(httpStatus.CREATED);
}