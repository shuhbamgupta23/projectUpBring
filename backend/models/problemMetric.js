import mongoose from "mongoose";


const problemMetric = new mongoose.Schema({
  IdentifyProblem: { type: Number, required: true },
  AnalysingInfomation: { type: Number, required: true },
  BreakingProblem: { type: Number, required: true },
  GeneratingSolution: { type: Number, required: true },
  ConsideringAlternative: { type: Number, required: true },
  uid: { type: mongoose.ObjectId, required: true },
});

const ProblemMetric = mongoose.model("ProblemMetric", problemMetric);

export default ProblemMetric;
