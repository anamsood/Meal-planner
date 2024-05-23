import express from "express";
import { router } from "./routers/routes.js";
import { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v2", router);

export { app };
