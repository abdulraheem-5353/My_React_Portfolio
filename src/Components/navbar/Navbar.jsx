import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Menu_Open from "../../assets/menu_open.svg";
import Menu_Close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>
        <span>AR</span> Portfolio.
      </h1>
      <img
        src={Menu_Open}
        onClick={openMenu}
        alt=""
        className="nav-mobile-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={Menu_Close}
          onClick={closeMenu}
          alt=""
          className="nav-mobile-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            {" "}
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>

          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            {" "}
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>

          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>

          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>

      <div className="nav-btn">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
