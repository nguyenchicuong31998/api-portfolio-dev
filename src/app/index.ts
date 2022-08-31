import express, { Application } from "express";
import routes from "./routes";
import helmet from "helmet";
import bodyParser from "body-parser";
// import { createModel } from "../infra/database/models/index.model";
// import rateLimit from 'express-rate-limit';
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes.mapRoute(app);

export default app;
