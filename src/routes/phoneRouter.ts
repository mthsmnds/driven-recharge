import { addPhoneController, getPhoneController } from "../controllers/phoneControllers";
import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import phoneSchema from "../schemas/phoneSchema";


const phoneRouter = Router();

phoneRouter.post("/phones", validateSchema(phoneSchema), addPhoneController);
phoneRouter.get("/phones/:document",getPhoneController);

export default phoneRouter;