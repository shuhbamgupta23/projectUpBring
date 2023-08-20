import CognitiveMetric from "./../models/cognitiveMetric.js";

export const cognitiveInput = async (req, res) => {
  let {
    MemoryDevelopment,
    Instruction,
    Curiosity,
    SocialUnderStanding,
    LanguageDevelopment,
    Gesture,
    Passion,
    uid,
  } = req.body;
  let total = 600;

  MemoryDevelopment = Math.floor((MemoryDevelopment / total) * 100);
  Instruction = Math.floor((Instruction / total) * 100);
  Curiosity = Math.floor((Curiosity / total) * 100);
  SocialUnderStanding = Math.floor((SocialUnderStanding / total) * 100);
  LanguageDevelopment = Math.floor((LanguageDevelopment / total) * 100);
  Gesture = Math.floor((Gesture / total) * 100);

  try {
    let cognitiveData = await CognitiveMetric.findOne({ uid: uid });
    if (cognitiveData !== null) {
      cognitiveData.MemoryDevelopment = MemoryDevelopment;
      cognitiveData.Instruction = Instruction;
      cognitiveData.Curiosity = Curiosity;
      cognitiveData.SocialUnderStanding = SocialUnderStanding;
      cognitiveData.LanguageDevelopment = LanguageDevelopment;
      cognitiveData.Gesture = Gesture;
      cognitiveData.Passion = Passion;
      await cognitiveData.save();
    } else {
      cognitiveData = await CognitiveMetric.create({
        MemoryDevelopment,
        Instruction,
        Curiosity,
        SocialUnderStanding,
        LanguageDevelopment,
        Gesture,
        Passion,
        uid,
      });
    }

    return res.status(200).json({ cognitiveData, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};

export const getCognitive = async (req, res) => {
  const { _id } = req.body;

  try {
    const congnitiveData = await CognitiveMetric.findOne({ uid: _id });

    res.status(200).json({ congnitiveData, status: true });
  } catch (err) {
    res.status(400).json({ error: err, status: false });
  }
};
