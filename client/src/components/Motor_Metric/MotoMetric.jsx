import React, { useState } from "react";
import "./motorstyle.css";
import { ReactPhotoCollage } from "react-photo-collage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const setting = {
  width: "100%",
  height: [],
  layout: [2, 3, 2],
  photos: [
    {
      source: "https://media.tenor.com/HQUwDjRX-uEAAAAC/wat-wat-confused.gif",
      alt: "some trees",
    },
    {
      source:
        "https://3.bp.blogspot.com/-OM47UrQ0fMs/UWI9Od9doUI/AAAAAAACCyc/e9rNf5UIO68/s1600/IMG_8344.JPG",
      alt: "some trees",
    },
    {
      source:
        "https://thumbs.gfycat.com/FirmPastGilamonster-size_restricted.gif",
      alt: "some trees",
    },
    {
      source:
        "https://ksr-ugc.imgix.net/assets/027/595/318/03a6cbb7226e80a56449b5e3354bd664_original.gif?ixlib=rb-2.1.0&w=680&fit=max&v=1577437276&auto=format&gif-q=50&q=92&s=40f642403c1d109ea340940c4dddc724",
      alt: "some trees",
    },
    {
      source: "https://i.gifer.com/PfzI.gif",
      alt: "some trees",
    },
    {
      source:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fdbc2801-4552-44ed-82c6-19f1bb912170/d52dks1-f93e5ba8-f19e-42a3-bd78-7afe28a4a5af.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZkYmMyODAxLTQ1NTItNDRlZC04MmM2LTE5ZjFiYjkxMjE3MFwvZDUyZGtzMS1mOTNlNWJhOC1mMTllLTQyYTMtYmQ3OC03YWZlMjhhNGE1YWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AWlosdj5JOJ0FlDX-NdYmQ9yuJ69Bvjj2Tl7mc_Mr3I",
      alt: "some trees",
    },
    {
      source:
        "https://media.istockphoto.com/id/91417227/photo/big-kick.jpg?s=612x612&w=0&k=20&c=CUosOHzSmDIUPKRq02_yFlZuqz5P8ljkebeXxr6KC9g=",
      alt: "some trees",
    },
  ],
  showNumOfRemainingPhotos: false,
};
const MotorMetric = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [data, setData] = useState({
    PageTuring: "",
    UsingUtensil: "",
    FingerPaiting: "",
    PuzzleSolving: "",
    jumping: "",
    running: "",
    walkingBackward: "",
    kickingBall: "",
    uid: userData._id,
  });

  const handleClick = () => {
    setData({
      PageTuring: "",
      UsingUtensil: "",
      FingerPaiting: "",
      PuzzleSolving: "",
      jumping: "",
      running: "",
      walkingBackward: "",
      kickingBall: "",
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
      const { data: result } = await axios.post("/motormetric", data, config);
      const profile = JSON.parse(localStorage.getItem("profile"));
      const { data: motorData } = await axios.post("/getmotor", {
        _id: profile._id,
      });
      localStorage.removeItem("motor");
      localStorage.setItem("motor", JSON.stringify(motorData));
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
        <h1>Significance of Motor Metrics</h1>
        <ul>
          <li className="motormetric_li">
            <img
              src="https://www.momjunction.com/wp-content/uploads/2018/09/Physical-Development-In-Infants-Toddlers.jpg"
              alt="anime"
            />
            <p>
              <b>Physical Development : </b>Motor skills are essential for
              physical development. Gross motor skills, which involve large
              muscle groups and movements, are important for activities like
              walking, running, jumping, and climbing. Fine motor skills, which
              involve smaller muscle groups and precise movements, are crucial
              for tasks such as writing, buttoning clothes, and using utensils.
              Developing both types of motor skills helps children build
              strength, coordination, and balance.
            </p>
          </li>
          <li className="motormetric_li">
            <p>
              <b>Cognitive Development : </b>Motor skills and cognitive
              development are closely intertwined. As children interact with
              their environment through movement, they develop a deeper
              understanding of spatial relationships, cause-and-effect, and
              object permanence. Activities that require problem-solving and
              decision-making, such as building with blocks or solving simple
              puzzles, help enhance cognitive skills.
            </p>
            <img
              src="https://brocku.ca/brock-news/wp-content/uploads/2021/11/GettyImages-1221651901-RS-1600x1067.jpg?x70330"
              alt="anime"
            />
          </li>
          <li className="motormetric_li">
            <img
              src="https://www.wordshark.co.uk/wp-content/uploads/2019/08/34702711_s.jpg"
              alt="anime"
            />
            <p>
              <b>Language and Communication : </b> Motor skills are connected to
              language and communication development. Pointing, gesturing, and
              using fine motor skills to manipulate objects are early forms of
              communication. Additionally, as children engage in activities that
              require listening, following instructions, and responding, they
              develop important language skills.
            </p>
            import {useNavigate} from 'react-router-dom';
          </li>
          <li className="motormetric_li">
            <p>
              <b>Social and Emotional Development : </b>
              Motor skills also contribute to social and emotional development.
              Through physical play, children learn to interact with others,
              take turns, and negotiate social situations. Playgrounds and group
              activities provide opportunities for children to build
              friendships, share experiences, and develop self-confidence.
            </p>
            <img
              src="https://images.ncsl.org/image/upload/c_fill,g_auto,w_600/f_auto,q_auto/v1668135098/website/GettyImages-684057264-crop.jpg"
              alt="anime"
            />
          </li>
        </ul>
      </div>
      <div className="motor_container">
        <header className="motor_header">
          <div className="motor_data">
            <ReactPhotoCollage {...setting} />
          </div>
        </header>
        <form
          className="motor_form"
          style={{ width: "45%" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>Fine Motor Skills</h1>
          <div>
            <label>Turning Pages skill</label>
            <input
              name="PageTuring"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.PageTuring}
              placeholder="Enter Child's Turning Pages skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Using Utensils skill</label>
            <input
              name="UsingUtensil"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.UsingUtensil}
              placeholder="Enter Child's Using Utensils skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Finger Painting skill</label>
            <input
              name="FingerPaiting"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.FingerPaiting}
              placeholder="Enter Child's Finger Painting skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Simple Puzzles solving</label>
            <input
              name="PuzzleSolving"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.PuzzleSolving}
              placeholder="Enter Child's Simple Puzzles solving skill (0-100)"
            ></input>
          </div>
          <h1>Gross Motor Skills</h1>
          <div>
            <label>Jumping skill</label>
            <input
              name="jumping"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.jumping}
              placeholder="Enter Child's Jumping skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Running skill</label>
            <input
              name="running"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.running}
              placeholder="Enter Child's Running skill (0-100)"
            ></input>
          </div>
          <div className="input">
            <label>Walking Backward </label>
            <input
              name="walkingBackward"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.walkingBackward}
              placeholder="Enter Child's Walking Backwards skill (0-100)"
            ></input>
          </div>
          <div>
            <label>Kicking a Ball</label>
            <input
              name="kickingBall"
              onChange={(e) => handleChange(e)}
              type="number"
              value={data.kickingBall}
              placeholder="Enter Child's Kicking a Ball skill (0-100)"
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

export default MotorMetric;
