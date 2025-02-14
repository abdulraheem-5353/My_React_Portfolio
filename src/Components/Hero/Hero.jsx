import React from "react";
import "./Hero.css";
import Profile_Img from "../../assets/profile_image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myResume from "../../../public/myResume.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myResume.pdf"; //reume path
    link.download = "Abdul_Raheem_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src={Profile_Img} alt="dp" className="profile-img" />

      <h1>
        <span>I'm Abdul Raheem,</span> frontend developer based in PAKISTAN.
      </h1>
      <p>
        I am a frontend developer from Mianwali, Punjab with 1+ years of
        experience in different projects at CodeAlpha, where I completed
        one-month and four-month internships.
      </p>

      <div className="hero-action">
        <div className="hero-btn">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <button className="hero-resume" onClick={handleDownload}>
          <a
            href={myResume}
            download="Abdul_Raheem_Resume.pdf"
            className="hero-resume"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
