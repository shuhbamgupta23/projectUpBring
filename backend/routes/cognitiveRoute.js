import express from "express";
import { cognitiveInput, getCognitive } from "../controller/cognitivemetric.js";

const cognitiveRouter = express.Router();

cognitiveRouter.post("/cognitivemetric", cognitiveInput);
cognitiveRouter.post("/getcognitive", getCognitive);

export default cognitiveRouter;
