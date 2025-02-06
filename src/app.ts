import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app: Express = express();


//middleware implementation
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
    res.send("This is Express Pollig Application Server");
  });

export default app;
