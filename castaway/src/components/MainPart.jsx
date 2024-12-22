import React from "react";
import Data from "../helpers/Main";
import "../styles/MainPart.css";

const MainPart = () => {
  return (
    <div className="blocks">
      <div className="topPart">
        <h1>Latest episodes</h1>
        <button>View Episode Details</button>
      </div>
      {Data.map((item, index) => {
        return (
          <div className="block" key={index}>
            <div className="imgPart">
              <img src={item.img} alt="" />
            </div>
            <div className="contentPart">
              <h6>{item.h6}</h6>
              <h5>{item.episode}</h5>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <button>View Episode Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainPart;
