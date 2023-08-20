import MotorMetric from "../models/motorMetric.js";

export const motorInput = async (req, res) => {
  let {
    PageTuring,
    UsingUtensil,
    FingerPaiting,
    PuzzleSolving,
    jumping,
    running,
    walkingBackward,
    kickingBall,
    uid,
  } = req.body;

  let total = 800;
  PageTuring = Math.floor((PageTuring / total) * 100);
  UsingUtensil = Math.floor((UsingUtensil / total) * 100);
  FingerPaiting = Math.floor((FingerPaiting / total) * 100);
  PuzzleSolving = Math.floor((PuzzleSolving / total) * 100);
  jumping = Math.floor((jumping / total) * 100);
  running = Math.floor((running / total) * 100);
  walkingBackward = Math.floor((walkingBackward / total) * 100);
  kickingBall = Math.floor((kickingBall / total) * 100);

  try {
    let motorData = await MotorMetric.findOne({ uid });
    if (motorData !== null) {
      motorData.PageTuring = PageTuring;
      motorData.UsingUtensil = UsingUtensil;
      motorData.FingerPaiting = FingerPaiting;
      motorData.PuzzleSolving = PuzzleSolving;
      motorData.jumping = jumping;
      motorData.running = running;
      motorData.walkingBackward = walkingBackward;
      motorData.kickingBall = kickingBall;
      await motorData.save();
    } else {
      motorData = await MotorMetric.create({
        PageTuring,
        UsingUtensil,
        FingerPaiting,
        PuzzleSolving,
        jumping,
        running,
        walkingBackward,
        kickingBall,
        uid,
      });
    }

    return res.status(200).json({ motorData, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};


export const getMotor = async (req, res) => {
  const { _id } = req.body;
 
  try {
    const motorData = await MotorMetric.findOne({ uid: _id });

    res.status(200).json({ motorData, status: true });
  } catch (err) {
    res.status(400).json({ error: err, status: false });
  }
};
