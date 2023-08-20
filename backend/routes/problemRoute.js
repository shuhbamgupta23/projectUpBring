import express from "express";
import { getProblem, problemMetric } from "../controller/problemmetric.js";

const problemRouter = express.Router();

problemRouter.post("/problemmetric", problemMetric);
problemRouter.post("/getproblem", getProblem);

export default problemRouter;
