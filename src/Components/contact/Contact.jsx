import React from "react";
import "./Contact.css";
import theme_patter from "../../assets/theme_pattern.svg";
import email_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f550203-096a-4062-ae0c-3777e48386d4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_patter} alt="" />
      </div>
      {/* contact detail */}
      <div className="contact-section">
        {/* contact left side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me message about anything that you want to me work on.You can
            contact with me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="" />
              <p>abdulraheemmalik6565@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+92 308 2283035</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />{" "}
              <p>Kalri, Mianwali Punjab Pakistan</p>
            </div>
          </div>
        </div>

        {/* right side of contact form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
