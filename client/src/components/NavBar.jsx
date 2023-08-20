import React, { useContext } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./../UserContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { account, setAccount } = useContext(UserContext);
  const userData = JSON.parse(localStorage.getItem("profile"));
  console.log(userData)
  const handleClick = () => {
    setAccount({});
    localStorage.removeItem("profile");
    localStorage.removeItem("cognitive");
    localStorage.removeItem("motor");
    localStorage.removeItem("problem");
    localStorage.removeItem("science");

    navigate("/");
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="nav_left">
            <a href={userData === null ? "/" : "/dashboard"}>
              <img
                className="nav_img"
                src="https://up-bring.com/cdn/shop/files/up-bring-logo_101c7977-431f-4fae-9918-280659b4bd35_120x.png?v=1613637566"
                alt="navimg"
              />
            </a>
            {userData && (
              <p className="user_name">
                <b>{userData.name} &nbsp; &nbsp;</b>
                Child's age &nbsp;<b>{userData.childAge}  </b> months
              </p>
            )}
          </div>
          <nav className="nav_right">
            {userData === null ? (
              <ul>
                <li>
                  <a href="/login">
                    <button>Login</button>
                  </a>
                </li>
                <li>
                  <a href="/signup">
                    <button>Sign up</button>
                  </a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="/dashboard">
                    <button>Overview</button>
                  </a>
                </li>
                <li>
                  <a href="/motor_metrics">
                    <button>Motor Metrics</button>
                  </a>
                </li>
                <li>
                  <a href="/cognitive_metrics">
                    <button>Cognitive Metrics</button>
                  </a>
                </li>
                <li>
                  <a href="/science_metrics">
                    <button>Science Exploration</button>
                  </a>
                </li>
                <li>
                  <a href="/problem_solving">
                    <button>Problem-Solving Proficiency</button>
                  </a>
                </li>
                <li>
                  <button type="button" onClick={handleClick}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
