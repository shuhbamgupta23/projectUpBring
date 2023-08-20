import React, { useState, useEffect } from "react";
import "./styles.css";

import { Chart } from "react-google-charts";

const DashBoard = () => {
  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );
  const [congnitiveData, setCognitiveData] = useState(
    JSON.parse(localStorage.getItem("cognitive")).congnitiveData || null
  );
  const [motorData, setMotorData] = useState(
    JSON.parse(localStorage.getItem("motor")).motorData || null
  );
  const [problemData, setProblemData] = useState(
    JSON.parse(localStorage.getItem("problem")).problemData || null
  );
  const [scienceData, setScienceData] = useState(
    JSON.parse(localStorage.getItem("science")).scienceData || null
  );

  const cognitive = [["cognitive", "Cognitive Skills"]];
  for (let key in congnitiveData) {
    if (key !== "uid" && key !== "Passion" && key !== "_id" && key !== "__v") {
      cognitive.push([key, congnitiveData[key]]);
    }
  }

  const finemotor = [["FineMotor", "Fine Motor Skill"]];
  const grossmotor = [["Gross Motor", "Gross Motor Skill"]];
  for (let key in motorData) {
    if (
      key !== "uid" &&
      key !== "_id" &&
      key !== "__v" &&
      key !== "jumping" &&
      key !== "running" &&
      key !== "walkingBackward" &&
      key !== "kickingBall"
    ) {
      finemotor.push([key, motorData[key]]);
    } else if (
      key !== "uid" &&
      key !== "Passion" &&
      key !== "_id" &&
      key !== "__v"
    ) {
      grossmotor.push([key, motorData[key]]);
    }
  }
  const problem = [["Problem Metric", "Problem Metric Skills"]];
  for (let key in problemData) {
    if (key !== "uid" && key !== "_id" && key !== "__v") {
      problem.push([key, problemData[key]]);
    }
  }
  const science = [["Science", "Science Skills"]];
  for (let key in scienceData) {
    if (key !== "uid" && key !== "_id" && key !== "__v") {
      science.push([key, scienceData[key]]);
    }
  }

  const finemotorOptions = {
    title: "Fine Motor Metrics",
    is3D: true,
  };
  const grossMotorOptions = {
    title: "Gross Motor Metrics",
    is3D: true,
  };

  const scienceOptions = {
    title: "Science Metric",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Science Metric",
      minValue: 0,
      maxValue: 100,
    },
  };
  const problemOption = {
    title: "Problem Metrics",
  };
  const cognitiveOption = {
    title: "Cognitive Skills",
    curveType: "function",
    legend: { position: "bottom" },
  };
  console.log(finemotor);
  return (
    <div className="dashboard_container">
      {userData !== null ? (
        <div className="main">
          <h1>Your Child's Overview</h1>
          <div className="top">
            <div className="top-left">
              {finemotor.length !== 1 ? (
                <div className="inner_left">
                  <Chart
                    className="chart"
                    chartType="PieChart"
                    data={finemotor}
                    options={finemotorOptions}
                    width={"70%"}
                    height={"100%"}
                  />
                  <Chart
                    className="chart"
                    chartType="PieChart"
                    data={grossmotor}
                    options={grossMotorOptions}
                    width={"70%"}
                    height={"100%"}
                  />
                </div>
              ) : (
                <div className="noData">
                  <h1>Enter Data to view Motor Metrics</h1>
                  <a href="/motor_metrics">
                    <button>Motor Metric</button>
                  </a>
                </div>
              )}
            </div>
            <div className="top-right">
              {cognitive.length !== 1 ? (
                <Chart
                  chartType="LineChart"
                  width={"100%"}
                  height={"100%"}
                  data={cognitive}
                  options={cognitiveOption}
                />
              ) : (
                <div className="noData">
                  <h1>Enter Data to View Cognitive Metrics</h1>
                  <a href="/cognitive_metrics">
                    <button>Cognitive Metric</button>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              {science.length !== 1 ? (
                <Chart
                  className="chart"
                  chartType="BarChart"
                  data={science}
                  options={scienceOptions}
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <div className="noData">
                  <h1>Enter Data to View Science Metrics</h1>
                  <a href="/science_metrics">
                    <button>Science Metric</button>
                  </a>
                </div>
              )}
            </div>
            <div className="bottom-right">
              {problem.length !== 1 ? (
                <Chart
                  className="chart"
                  chartType="PieChart"
                  data={problem}
                  options={problemOption}
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <div className="noData">
                  <h1>Enter Data to View Problem Solving Metrics</h1>
                  <a href="/problem_solving">
                    <button>Problem-Solving Metric</button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="loggedout">
          <div className="welcome_main">
            <div>
              <h3>Login to continue</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
