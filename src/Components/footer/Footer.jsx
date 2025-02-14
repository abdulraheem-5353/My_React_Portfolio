import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        {/* footer left side */}
        <div className="footer-top-left">
          <h1>
            <span>AR</span> Portfolio
          </h1>
          <p>
            I am frontend developer from, Mianwali Punjab Pakistan with 2 year
            plus experience in frontend development I also work at codeAlpha
          </p>
        </div>

        {/* footer top right */}
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subcribe">Subcribe</div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Copyright 2025 AR Portfolio. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
