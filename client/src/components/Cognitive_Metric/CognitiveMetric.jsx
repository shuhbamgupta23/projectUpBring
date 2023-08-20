import React, { useState } from "react";
import "./cognitivestyle.css";
import { ReactPhotoCollage } from "react-photo-collage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const setting = {
  width: "100%",
  height: [],
  layout: [2, 3, 2],
  photos: [
    {
      source:
        "https://www.shutterstock.com/shutterstock/photos/534225538/display_1500/stock-photo-portrait-of-an-adorable-little-boy-wearing-a-suit-and-standing-near-a-chalkboard-with-a-colorful-534225538.jpg",
      alt: "some trees",
    },
    {
      source:
        "data:image/jpeg;base64,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",
      alt: "some trees",
    },
    {
      source: "https://media.tenor.com/JpMU_TpzJcQAAAAM/excited-kid.gif",
      alt: "some trees",
    },
    {
      source:
        "https://ksr-ugc.imgix.net/assets/027/595/318/03a6cbb7226e80a56449b5e3354bd664_original.gif?ixlib=rb-2.1.0&w=680&fit=max&v=1577437276&auto=format&gif-q=50&q=92&s=40f642403c1d109ea340940c4dddc724",
      alt: "some trees",
    },
    {
      source:
        "data:image/jpeg;base64,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",
      alt: "some trees",
    },
    {
      source:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3M1MGY4NmVwcnhxNXJmcWdvOHo2NXlxYXJ4ZDZncnhiOW02a3pzYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fFGFEhVN6wY8w/source.gif",
      alt: "some trees",
    },
    {
      source:
        "https://thumbs.gfycat.com/MassiveSecondaryEelelephant-max-1mb.gif",
      alt: "some trees",
    },
  ],
  showNumOfRemainingPhotos: false,
};
const CognitiveMetric = () => {
  const userData = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  const [data, setData] = useState({
    MemoryDevelopment: "",
    Instruction: "",
    Curiosity: "",
    SocialUnderStanding: "",
    LanguageDevelopment: "",
    Gesture: "",
    Passion: "Animal",
    uid: userData._id,
  });
  const handleClick = () => {
    setData({
      MemoryDevelopment: "",
      Instruction: "",
      Curiosity: "",
      SocialUnderStanding: "",
      LanguageDevelopment: "",
      Gesture: "",
      Passion: "",
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
      const { data: result } = await axios.post(
        "/cognitivemetric",
        data,
        config
      );
      const profile = JSON.parse(localStorage.getItem("profile"));
      const { data: cognitiveData } = await axios.post("/getcognitive", {
        _id: profile._id,
      });
      localStorage.removeItem("cognitive");
      localStorage.setItem("cognitive", JSON.stringify(cognitiveData));
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
        <h1>Significance of Cognitive Metrics</h1>
        <ul>
          <li className="motormetric_li">
            <img
              src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/shutterstock_536550898.jpg?w=2880&quality=85"
              alt="anime"
            />
            <p>
              <b>Assessment of Learning Readiness : </b> Cognitive metrics
              provide insights into a child's readiness to learn new concepts
              and skills. Assessing cognitive milestones helps determine if a
              child is prepared for certain educational experiences, ensuring
              that the content and activities are developmentally appropriate.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Individualized Learning : </b> Understanding a child's
              cognitive strengths and areas needing improvement allows educators
              and caregivers to provide personalized learning experiences.
              Adjusting teaching methods and materials to match a child's
              cognitive level can enhance their engagement and comprehension.
            </p>
            <img
              src="https://gumlet.assettype.com/whiteswanfoundation%2F2020-07%2F9065d97d-b6b5-41b9-8027-6f9bb948fc1d%2FImage__34_.jpg?rect=0%2C0%2C2592%2C1458&format=auto"
              alt="anime"
            />
          </li>
          <li className="motormetric_li">
            <img
              src="https://www.nurturepods.com/wp-content/uploads/2019/05/image3.png"
              alt="anime"
            />
            <p>
              <b>Identification of Developmental Delays : </b> Cognitive metrics
              help identify potential developmental delays or learning
              disabilities at an early stage. Early intervention is crucial for
              addressing any challenges and providing appropriate support to
              ensure the child reaches their full potential.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Measurement of Progress : </b>
              Regular cognitive assessments track a child's progress over time.
              This helps parents and educators monitor how well a child is
              mastering new skills, adapting to challenges, and advancing in
              their cognitive abilities.
            </p>
            <img
              src="https://study.com/cimages/videopreview/videopreview-full/1m7fpstc6p.jpg"
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
          <h1>Congnitive Metrics</h1>
          <div>
            <label>Memory Development</label>
            <input
              value={data.MemoryDevelopment}
              onChange={(e) => handleChange(e)}
              type="number"
              name="MemoryDevelopment"
              placeholder="Enter Child's Memory Development (0-100)"
            ></input>
          </div>
          <div>
            <label>Simple Instruction Skills</label>
            <input
              value={data.Instruction}
              onChange={(e) => handleChange(e)}
              type="number"
              name="Instruction"
              placeholder="Enter Child's Following Simple Instructions skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Curiosity and Exploration</label>
            <input
              onChange={(e) => handleChange(e)}
              type="number"
              name="Curiosity"
              value={data.Curiosity}
              placeholder="Enter Child's Curiosity and Exploration (0-100)"
            ></input>
          </div>
          <div>
            <label>Social Understanding skill</label>
            <input
              onChange={(e) => handleChange(e)}
              name="SocialUnderStanding"
              type="number"
              value={data.SocialUnderStanding}
              placeholder="Enter Child's Social Understanding skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Language Development</label>
            <input
              onChange={(e) => handleChange(e)}
              name="LanguageDevelopment"
              type="number"
              value={data.LanguageDevelopment}
              placeholder="Enter Child's Language Development (0-100)"
            ></input>
          </div>
          <div>
            <label>Pointing and Gestures skill</label>
            <input
              onChange={(e) => handleChange(e)}
              name="Gesture"
              type="number"
              value={data.Gesture}
              placeholder="Enter Child's Pointing and Gestures skill (0-100)"
            ></input>
          </div>

          <div className="select">
            <label className="cognitive_label" htmlFor="task_status">
              Child's Passion
            </label>
            <select
              name="Passion"
              id="task_status"
              onChange={(e) => handleChange(e)}
              value={data.Passion}
            >
              <option value="Animals">Animals</option>
              <option value="Art and Creativity">Art and Creativity</option>
              <option value="Music">Music</option>
              <option value="Science">Science</option>
              <option value="Building and Construction">
                Building and Construction
              </option>
            </select>
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

export default CognitiveMetric;
