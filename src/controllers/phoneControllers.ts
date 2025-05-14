import { Request, Response } from "express";
import httpStatus from "http-status"
import { InsertPhone } from "../protocols/protocols";
import { addPhoneService } from "../services/phoneServices";

export async function addPhoneController(req: Request, res: Response){
        const result = req.body as InsertPhone;
        await addPhoneService(result);

        res.sendStatus(httpStatus.CREATED);
        
}