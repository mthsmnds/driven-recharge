import { Request, Response } from "express";
import { getSummaryService } from "../services/summaryService";

export async function getSummaryController(req: Request, res:Response){
    const {document} = req.params;
    const result = await getSummaryService(document)
    res.send(result);
}