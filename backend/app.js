import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import signupRouter from "./routes/signup.js";
import motorRouter from "./routes/motorRoute.js";
import cognitiveRouter from "./routes/cognitiveRoute.js";
import problemRouter from "./routes/problemRoute.js";
import scienceRouter from "./routes/scienceRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", signupRouter);
app.use("/", motorRouter);
app.use("/", cognitiveRouter);
app.use("/", problemRouter);
app.use("/", scienceRouter);
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://project:123@cluster0.qq3vqz9.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(5000, () => {
      console.log(`Connected to MongoDB and listening on PORT 5000`);
    });
  } catch (err) {
    console.log(err);
  }
})();

export default app;
