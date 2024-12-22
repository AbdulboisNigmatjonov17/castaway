import React from "react";
import Nigga2 from "../assets/Nigga2.svg";
import Strelka from "../assets/Strelka.svg";
import "../styles/SectionPart.css";

const SectionPart = () => {
  return (
    <div className="all">
      <div className="topPart">
        <div className="content">
          <img src={Strelka} alt="Strelka" width={100} />
          <span>Meet your host</span>
          <h1>Jacob Paulaner</h1>
          <p>
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p>
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </p>
        </div>
        <img src={Nigga2} alt="Nigga" width={550} />
      </div>
      <div className="bottomPart">
        <div className="gmail">
          <div className="gmailContent">
            <span>Email Newsletter</span>
            <h1>Subscribe for updates</h1>
          </div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionPart;
