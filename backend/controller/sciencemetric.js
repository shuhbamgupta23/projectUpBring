import ScienceMetric from "../models/scienceMetric.js";

export const scienceMetric = async (req, res) => {
  let { Curiosity, Prediction, Engagement, NaturalPhenomena, uid } = req.body;

  try {
    let scienceData = await ScienceMetric.findOne({ uid });
    if (scienceData !== null) {
      scienceData.Curiosity = Curiosity;
      scienceData.Prediction = Prediction;
      scienceData.Engagement = Engagement;
      scienceData.NaturalPhenomena = NaturalPhenomena;
      await scienceData.save();
    } else {
      scienceData = await ScienceMetric.create({
        Curiosity,
        Prediction,
        Engagement,
        NaturalPhenomena,
        uid,
      });
    }

    return res.status(200).json({ scienceData, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};


export const getScience = async (req, res) => {
  const { _id } = req.body;
  console.log(_id)
  try {
    const scienceData = await ScienceMetric.findOne({ uid: _id });
    res.status(200).json({ scienceData, status: true });
  } catch (err) {
    res.status(400).json({ error: err, status: false });
  }
};
