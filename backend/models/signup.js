import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  name: { type: String, required:true },
  childAge: { type: Number, required:true },
  email: { type: String, required:true },
  password: { type: String, required:true },
});

const SignUp = mongoose.model("SignUp", signupSchema);

export default SignUp;
