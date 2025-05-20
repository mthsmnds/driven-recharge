import { Request, Response } from "express";
import httpStatus from "http-status"
import { InsertPhone} from "../protocols/protocols";
import { addPhoneService, getPhoneService } from "../services/phoneServices";

export async function addPhoneController(req: Request, res: Response){
        const phoneBody = req.body as InsertPhone;
        await addPhoneService(phoneBody);

        res.sendStatus(httpStatus.CREATED); 
}

export async function getPhoneController(req: Request, res: Response){
        const {document} = req.params;
        const result = await getPhoneService(document);
        res.send(result);
}