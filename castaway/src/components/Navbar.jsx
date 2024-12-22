import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <img src={Logo} alt="NavImg" width={200} />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Episodes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
