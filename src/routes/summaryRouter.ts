import { getSummaryController } from "../controllers/summaryController";
import { Router } from "express";


const summaryRouter = Router();

summaryRouter.get("/summary/:document", getSummaryController);

export default summaryRouter;