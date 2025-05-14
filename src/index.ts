import express, {json} from "express";
import phoneRouter from "./routes/phoneRouter";
import customerRouter from "./routes/customerRouter";

const app = express();
app.use(json());

app.use(phoneRouter);
app.use(customerRouter);

app.listen(5000, ()=> console.log("Server is running!"));