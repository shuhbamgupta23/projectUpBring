import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    childAge: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleClick = () => {
    setUser({
      name: "",
      childAge: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios.post("/signup", user, config);
      navigate("/login");
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    handleClick();
  };
  return (
    <div className="login_container">
      <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign up</h1>
        <input
          value={user.name}
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          required
          placeholder="Enter your full name"
        ></input>
        <input
          type="number"
          name="childAge"
          value={user.childAge}
          required
          onChange={(e) => handleChange(e)}
          placeholder="Enter your child's age in months"
        ></input>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
          required
          placeholder="Enter your email"
        ></input>
        <input
          type="password"
          required
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your password"
        ></input>
        <input
          type="password"
          required
          value={user.confirmpassword}
          name="confirmpassword"
          onChange={(e) => handleChange(e)}
          placeholder="Confirm your password"
        ></input>
        <div className="buttons">
          <button type="submit">Sign Up</button>
          <button type="button" onClick={handleClick}>
            Clear
          </button>
          <a href="/login">
            <button type="button">Login</button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUP;
