import { addCustomerController } from "../controllers/customerController";
import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import customerSchema from "../schemas/customerSchema";

const customerRouter = Router();

customerRouter.post("/customers", validateSchema(customerSchema), addCustomerController);

export default customerRouter;