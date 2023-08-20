import mongoose from "mongoose";

const motorMetric = new mongoose.Schema({
  PageTuring: { type: Number, required: true },
  UsingUtensil: { type: Number, required: true },
  FingerPaiting: { type: Number, required: true },
  PuzzleSolving: { type: Number, required: true },
  jumping: { type: Number, required: true },
  running: { type: Number, required: true },
  walkingBackward: { type: Number, required: true },
  kickingBall: { type: Number, required: true },
  uid: { type: mongoose.ObjectId, required: true },
});

const MotorMetric = mongoose.model("MotorMetric", motorMetric);

export default MotorMetric;
