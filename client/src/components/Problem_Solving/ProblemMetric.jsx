import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { ReactPhotoCollage } from "react-photo-collage";
const setting = {
  width: "100%",
  height: [],
  layout: [2, 2],
  photos: [
    {
      source:
        "https://global-uploads.webflow.com/5ab25784c7fcbff004fa8dca/5ebeaaf19bbe9805f72ce1a1_PS4-4-360p-85544632-a071-4b12-b105-ef7e58369f0e.gif",
      alt: "some trees",
    },
    {
      source:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXV6ZTYyaTlzaXNubm92ejNydDJwbTdpNzZ1bTU3dzNocHRhajFhayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11XiZTEwZe15Mk/giphy.gif",
      alt: "some trees",
    },
    {
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wL64or58Qe7WnGIqqXSc13_bQvb8Sg6VfA&usqp=CAU",
      alt: "some trees",
    },
    {
      source: "https://media.tenor.com/pg3BodAt-9EAAAAM/so-creative.gif",
      alt: "some trees",
    },
  ],
  showNumOfRemainingPhotos: false,
};
const ProblemMetric = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [data, setData] = useState({
    IdentifyProblem: "",
    AnalysingInfomation: "",
    BreakingProblem: "",
    GeneratingSolution: "",
    ConsideringAlternative: "",
    uid: userData._id,
  });

  const handleClick = () => {
    setData({
      IdentifyProblem: "",
      AnalysingInfomation: "",
      BreakingProblem: "",
      GeneratingSolution: "",
      ConsideringAlternative: "",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios.post("/problemmetric", data, config);
      const profile = JSON.parse(localStorage.getItem("profile"));
      const { data: problemData } = await axios.post("/getproblem", {
        _id: profile._id,
      });
      localStorage.removeItem("problem");
      localStorage.setItem("problem", JSON.stringify(problemData));
      console.log(result);
    } catch (err) {
      console.log(err);
    }
    handleClick();
    navigate("/dashboard");
  };

  return (
    <div className="motor_main_container">
      <div className="motor_significance">
        <h1>Significance of Problem Metric</h1>
        <ul>
          <li className="motormetric_li">
            <img
              src="https://d3eizkexujvlb4.cloudfront.net/2019/04/15212121/critical-thinking-questions-for-kids.jpg"
              alt="anime"
            />
            <p>
              <b>Critical Thinking Skills : </b>
              Problem-solving metrics help evaluate a child's critical thinking
              abilities. Critical thinking involves analyzing situations,
              considering multiple perspectives, and making informed decisions
              based on evidence.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Adaptability : </b>Effective problem-solving requires the
              ability to adapt to new situations and challenges. Assessing a
              child's adaptability indicates their capacity to cope with change
              and uncertainty.
            </p>
            <img
              src="https://pasen.org/wp-content/uploads/2019/04/Adaptive-Skills-5.jpg"
              alt="anime"
            />
          </li>
          <li className="motormetric_li">
            <img
              src="https://www.momjunction.com/wp-content/uploads/2015/06/8SimpleActivities-ToBuildSelfEsteemInChildren-910x1024.jpg"
              alt="anime"
            />
            <p>
              <b>Confidence and Self-Efficacy : </b>
              Successfully solving problems boosts a child's self-confidence and
              belief in their abilities to handle challenges, contributing to
              their overall self-esteem.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Creativity : </b>Problem-solving often demands creative
              thinking. Measuring a child's problem-solving skills provides
              insights into their capacity to generate innovative solutions.
            </p>
            <img
              src="https://theinspiredtreehouse.com/wp-content/uploads/2016/06/creative-cutting-practice-square.jpg"
              alt="anime"
            />
          </li>
        </ul>
      </div>
      <div className="cognitive_container">
        <header className="motor_header">
          <div className="motor_data">
            <ReactPhotoCollage {...setting} />
          </div>
        </header>
        <form className="cognitive_form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Problem Metric</h1>
          <div>
            <label>Problem skill</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="IdentifyProblem"
              value={data.IdentifyProblem}
              placeholder="Enter Child's Identifying the Problem skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Analyzing Information</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="AnalysingInfomation"
              value={data.AnalysingInfomation}
              placeholder="Enter Child's Analyzing Information skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Breaking Down Problem</label>
            <input
              name="BreakingProblem"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.BreakingProblem}
              placeholder="Enter Child's Breaking Down the Problem skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Generating Solutions</label>
            <input
              name="GeneratingSolution"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.GeneratingSolution}
              placeholder="Enter Child's Generating Solutions skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Considering Alternatives</label>
            <input
              name="ConsideringAlternative"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.ConsideringAlternative}
              placeholder="Enter Child's Considering Alternatives skill (0-100)"
            ></input>
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClick}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProblemMetric;
