import express, {json} from "express";
import { errorHandler } from "./middlewares/errorHandlerMiddleware";
import phoneRouter from "./routes/phoneRouter";
import customerRouter from "./routes/customerRouter";
import rechargeRouter from "./routes/rechargeRouter";

const app = express();
app.use(json());

app.use(phoneRouter);
app.use(customerRouter);
app.use(rechargeRouter);

// app.use(errorHandler);

app.listen(5000, ()=> console.log("Server is running!"));