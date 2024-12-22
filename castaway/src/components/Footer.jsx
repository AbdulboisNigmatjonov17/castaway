import React from "react";
import Logo from "../assets/Logo.svg";
import Img from "../assets/FooterIcons.svg";
import Icons from "../assets/Icons.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="left">
          <img src={Logo} alt="Logo" width={250} />
          <img src={Img} alt="Img" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Episodes</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Style Guide</a>
          </li>
          <li>
            <a href="">Instructions</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Credit</a>
          </li>
          <li>
            <a href="">Powered by Webflow</a>
          </li>
          <li>
            <a href="">Licenses</a>
          </li>
        </ul>
        <img src={Icons} alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
