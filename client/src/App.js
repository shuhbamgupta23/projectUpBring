import "./App.css";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUP from "./components/SignUp/SignUp";
import MotorMetric from "./components/Motor_Metric/MotoMetric";
import ScienceMetric from "./components/Science_Metric/ScienceMetric";
import CognitiveMetric from "./components/Cognitive_Metric/CognitiveMetric";
import ProblemMetric from "./components/Problem_Solving/ProblemMetric";
import Welcome from "./components/Welcome/Welcome";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [account, setAccount] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ account, setAccount }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" Component={Welcome} />
            <Route exact path="/dashboard" Component={DashBoard} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUP} />
            <Route exact path="/motor_metrics" Component={MotorMetric} />
            <Route exact path="/science_metrics" Component={ScienceMetric} />
            <Route exact path="/problem_solving" Component={ProblemMetric} />
            <Route
              exact
              path="/cognitive_metrics"
              Component={CognitiveMetric}
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
