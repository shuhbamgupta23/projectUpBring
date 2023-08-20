import SignUp from "../models/signup.js";

export const signup = async (req, res) => {
  const { name, childAge, email, password } = req.body;
  console.log(name, childAge, email, password);
  try {
    let user = await SignUp.findOne({ email: email });
    if (user !== null) {
      return res
        .status(400)
        .json({ message: "User already exists", status: false });
    }else{
      user = await SignUp.create({ name, childAge, email, password });
    }
  
    return res.status(200).json({ user, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await SignUp.findOne({ email: email });
    if (user === null) {
      return res.status(400).json({ Error: "User not found", status: false });
    }
    if (user.password !== password) {
      return res
        .status(400)
        .json({ Error: "password do not match", status: false });
    }
    return res.status(200).json({ user, status: true });
  } catch (err) {
    return res.status(400).json({ error: err, status: false });
  }
};
