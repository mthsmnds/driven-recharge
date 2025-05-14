import { Request, Response } from "express";
import { InsertRecharge } from "../protocols/protocols";
import httpStatus from "http-status";
import { addRechargeService, getRechargeService } from "../services/rechargeService";

export async function addRechargeController(req: Request, res: Response){
    const recharge = req.body as InsertRecharge;
    const result = await addRechargeService(recharge);
    res.status(httpStatus.CREATED).send(result);
}

export async function getRechargeController(req: Request, res: Response){
    const {number} = req.params;
    const result = await getRechargeService(number);
    res.send(result);
}