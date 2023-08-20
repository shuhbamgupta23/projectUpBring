import React, { useState, useContext } from "react";
import "./styles.css";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setUser({ email: "", password: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data: result } = await axios.post("/login", user, config);
      localStorage.setItem("profile", JSON.stringify(result.user));
      const profile = JSON.parse(localStorage.getItem("profile"));

      const { data: motorData } = await axios.post("/getmotor", {
        _id: profile._id,
      });
      const { data: cognitiveData } = await axios.post("/getcognitive", {
        _id: profile._id,
      });
      const { data: scienceData } = await axios.post("/getscience", {
        _id: profile._id,
      });
      const { data: problemData } = await axios.post("/getproblem", {
        _id: profile._id,
      });

      localStorage.setItem("motor", JSON.stringify(motorData));
      localStorage.setItem("cognitive", JSON.stringify(cognitiveData));
      localStorage.setItem("science", JSON.stringify(scienceData));
      localStorage.setItem("problem", JSON.stringify(problemData));

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
    handleClick();
  };

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          type="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
          required
          name="email"
          placeholder="Enter your email"
        ></input>
        <input
          value={user.password}
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="Enter your password"
          required
        ></input>
        <div className="buttons">
          <button type="submit">Login</button>
          <button onClick={handleClick} type="button">
            Clear
          </button>

          <a href="/signup">
            <button type="button">Sign Up</button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
