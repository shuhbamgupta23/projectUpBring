import express from "express";
import { getScience, scienceMetric } from "../controller/sciencemetric.js";

const scienceRouter = express.Router();

scienceRouter.post("/sciencemetric", scienceMetric);
scienceRouter.post("/getscience", getScience);


export default scienceRouter;
