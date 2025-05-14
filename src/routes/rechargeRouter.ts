import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import rechargeSchema from "../schemas/rechargeSchema";
import { addRechargeController, getRechargeController } from "../controllers/rechargeController";


const rechargeRouter = Router();

rechargeRouter.post("/recharges", validateSchema(rechargeSchema), addRechargeController);
rechargeRouter.get("/recharges/:number", getRechargeController);

export default rechargeRouter;