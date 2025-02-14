import React from "react";
import "./MyWork.css";
import Theme_Pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Recent Work</h1>
        <img src={Theme_Pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_img} alt={work.w_name} />
              <button
                className="view-project-button"
                onClick={() => window.open(work.w_link, "_blank")}
              >
                View Project
              </button>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
