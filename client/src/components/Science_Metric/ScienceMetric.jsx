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
        "https://media.istockphoto.com/id/944364852/vector/child-holding-magnifying-glass.jpg?s=612x612&w=0&k=20&c=-g9MOglVHsaY6NzNkU1-TS4FQ6twsJGfdzxOI_RqiIY=",
      alt: "some trees",
    },
    {
      source:
        "https://media.istockphoto.com/id/1215443032/vector/boy-doubting.jpg?s=612x612&w=0&k=20&c=ITayOJPonTpgZG-tYJTSLmC6v1LVaTt0XjHtG0nUEhI=",
      alt: "some trees",
    },
    {
      source: "https://clipart-library.com/data_images/74284.gif",
      alt: "some trees",
    },
    {
      source:
        "https://media.tenor.com/62dxQnVEppIAAAAM/experiment-scientist.gif",
      alt: "some trees",
    },
  ],
  showNumOfRemainingPhotos: false,
};
const ScienceMetric = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [data, setData] = useState({
    Curiosity: "",
    Prediction: "",
    Engagement: "",
    NaturalPhenomena: "",
    uid: userData._id,
  });

  const handleClick = () => {
    setData({
      Curiosity: "",
      Prediction: "",
      Engagement: "",
      NaturalPhenomena: "",
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
      const { data: result } = await axios.post("/sciencemetric", data, config);
      const profile = JSON.parse(localStorage.getItem("profile"));
      const { data: scienceData } = await axios.post("/getscience", {
        _id: profile._id,
      });
      localStorage.removeItem("science");
      localStorage.setItem("science", JSON.stringify(scienceData));
    } catch (err) {
      console.log(err);
    }
    handleClick();
    navigate("/dashboard");
  };

  return (
    <div className="motor_main_container">
      <div className="motor_significance">
        <h1>Significance of Science Exploration</h1>
        <ul>
          <li className="motormetric_li">
            <img
              src="https://www.orchidsinternationalschool.com/wp-content/uploads/2021/05/Cusrious-Thinker-Boy.jpg"
              alt="anime"
            />
            <p>
              <b>Curiosity and Inquiry : </b>
              Science exploration encourages children to ask questions about the
              world and seek answers through observation, experimentation, and
              investigation. This natural curiosity drives their desire to learn
              and understand how things work.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b> Critical Thinking : </b>Engaging in scientific activities
              promotes critical thinking skills. Children learn to analyze
              information, draw conclusions, make predictions, and evaluate
              evidence based on their observations and experiments.
            </p>
            <img
              src="https://www.orchidsinternationalschool.com/wp-content/uploads/2020/01/69836632-H.jpg"
              alt="anime"
            />
          </li>
          <li className="motormetric_li">
            <img
              src="https://empoweredparents.co/wp-content/uploads/2018/09/problem-solving-activities-preschoolers-c.jpg.webp"
              alt="anime"
            />
            <p>
              <b>Problem-Solving : </b>Science exploration involves identifying
              problems, formulating hypotheses, and testing solutions. This
              process helps children develop effective problem-solving skills
              that can be applied in various areas of life.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Hands-On Learning : </b>Science exploration is often hands-on
              and experiential. Hands-on activities provide a tangible way for
              children to interact with concepts and develop a deeper
              understanding of scientific principles.
            </p>
            <img
              src="https://www.learnwithhomer.com/homer-blog/wp-content/uploads/sites/5/2021/12/hands-on-learning_6.jpg"
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
          <h1>Science Exploration</h1>
          <div className="input">
            <label>Curiosity</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="Curiosity"
              value={data.Curiosity}
              placeholder="Enter Child's Curiosity and Questioning (0-100)"
            ></input>
          </div>
          <div className="input">
            <label>Predictions</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="Prediction"
              value={data.Prediction}
              placeholder="Enter Child's Predictions and Conclusions (0-100)"
            ></input>
          </div>
          <div className="input">
            <label>Engagement</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="Engagement"
              value={data.Engagement}
              placeholder="Enter Child's Engagement in Scientific Play (0-100)"
            ></input>
          </div>
          <div className="input">
            <label>Natural Phenomena</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="NaturalPhenomena"
              value={data.NaturalPhenomena}
              placeholder="Enter Child's Interest in Natural Phenomena (0-100)"
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

export default ScienceMetric;
