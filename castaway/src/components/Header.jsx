import React from "react";
import "../styles/Header.css";
import HeaderImg from "../assets/HeaderPhoto.svg";
import HeaderIcons from "../assets/Icons.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderContent">
        <div className="leftHeader">
          <img src={HeaderImg} alt="" width={500} />
        </div>
        <div className="rightHeader">
          <div className="content">
            <p>Take your podcast to the next level</p>
            <section>Listen on</section>
            <img src={HeaderIcons} alt="HeaderIconsImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
