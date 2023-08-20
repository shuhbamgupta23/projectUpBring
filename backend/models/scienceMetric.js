import mongoose from "mongoose";

const scienceMetric = new mongoose.Schema({
  Curiosity: { type: Number, required: true },
  Prediction: { type: Number, required: true },
  Engagement: { type: Number, required: true },
  NaturalPhenomena: { type: Number, required: true },
  uid: { type: mongoose.ObjectId, required: true },
});

const ScienceMetric = mongoose.model("ScienceMetric", scienceMetric);

export default ScienceMetric;