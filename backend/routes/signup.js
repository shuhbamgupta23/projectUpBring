import express from "express";
import { login, signup } from "../controller/signup.js";

const signupRouter = express.Router();

signupRouter.post("/signup", signup);
signupRouter.post("/login", login);

export default signupRouter;
