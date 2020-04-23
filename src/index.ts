import express from "express";
import { hello } from "./hello";

const app = express();

app.get("/", hello);

app.listen(3333);
