import express, {json} from "express";
import phoneRouter from "./routes/phoneRouter";

const app = express();
app.use(json());

app.use(phoneRouter);

app.listen(5000, ()=> console.log("Server is running!"));