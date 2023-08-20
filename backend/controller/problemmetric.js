import ProblemMetric from "../models/problemMetric.js";

export const problemMetric = async (req, res) => {
  let {
    IdentifyProblem,
    AnalysingInfomation,
    BreakingProblem,
    GeneratingSolution,
    ConsideringAlternative,
    uid,
  } = req.body;

  let total = 500;
  IdentifyProblem = Math.floor((IdentifyProblem / total) * 100);
  AnalysingInfomation = Math.floor((AnalysingInfomation / total) * 100);
  BreakingProblem = Math.floor((BreakingProblem / total) * 100);
  GeneratingSolution = Math.floor((GeneratingSolution / total) * 100);
  ConsideringAlternative = Math.floor((ConsideringAlternative / total) * 100);
  try {
    let problemData = await ProblemMetric.findOne({ uid });
    if (problemData !== null) {
      problemData.IdentifyProblem = IdentifyProblem;
      problemData.AnalysingInfomation = AnalysingInfomation;
      problemData.BreakingProblem = BreakingProblem;
      problemData.GeneratingSolution = GeneratingSolution;
      problemData.ConsideringAlternative = ConsideringAlternative;
      await problemData.save();
    } else {
      problemData = await ProblemMetric.create({
        IdentifyProblem,
        AnalysingInfomation,
        BreakingProblem,
        GeneratingSolution,
        ConsideringAlternative,
        uid,
      });
    }

    return res.status(200).json({ problemData, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};

export const getProblem = async (req, res) => {
  const { _id } = req.body;

  try {
    const problemData = await ProblemMetric.findOne({ uid: _id });

    res.status(200).json({ problemData, status: true });
  } catch (err) {
    res.status(400).json({ error: err, status: false });
  }
};
