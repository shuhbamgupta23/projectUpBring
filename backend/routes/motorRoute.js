import express from "express";
import { getMotor, motorInput } from "../controller/motormetric.js";

const motorRouter = express.Router();

motorRouter.post("/motormetric", motorInput);
motorRouter.post("/getmotor", getMotor);

export default motorRouter;
