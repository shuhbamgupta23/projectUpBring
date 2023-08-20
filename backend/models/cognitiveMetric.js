import mongoose from "mongoose";

const cognitiveMetric = new mongoose.Schema({
  MemoryDevelopment: { type: Number, required: true },
  Instruction: { type: Number, required: true },
  Curiosity: { type: Number, required: true },
  SocialUnderStanding: { type: Number, required: true },
  LanguageDevelopment: { type: Number, required: true },
  Gesture: { type: Number, required: true },
  Passion: { type: String, required: true },
  uid: { type: mongoose.ObjectId, required: true },
});

const CognitiveMetric = mongoose.model("CognitiveMetric", cognitiveMetric);

export default CognitiveMetric;
