import React from "react";
import "./About.css";
import Theme_pattern from "../../assets/theme_pattern.svg";
import Profile_Img from "../../assets/profile_Image.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={Theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile_Img} alt="" width="90%" height="90%" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am experienced Frontend Developer with over a decade of
              professional experties in the field.Throughout y career, I have
              had the privileges of collaborative with organization,
              contributing to their sucess and growth.
            </p>
            <p>
              My passion for Frontend Development is not only but also in the
              anthusiasm and dedication I bring to each project.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "61%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "58%" }} />
            </div>
            <div className="about-skill">
              <p>NodeJS</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>ExpressJS</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achivements">
        <div className="about-achive">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achive">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achive">
          <h1>1</h1>
          <p>COMPANY WITH WORK</p>
        </div>
      </div>
    </div>
  );
};

export default About;
