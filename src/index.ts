import express, {json} from "express";
import { errorHandler } from "./middlewares/errorHandlerMiddleware";
import phoneRouter from "./routes/phoneRouter";
import rechargeRouter from "./routes/rechargeRouter";
import summaryRouter from "./routes/summaryRouter";

const app = express();
app.use(json());

app.use(phoneRouter);
app.use(rechargeRouter);
app.use(summaryRouter);

app.use(errorHandler);

app.listen(5000, ()=> console.log("Server is running!"));