import React from "react";
import data from "../helpers/boxes";
import "../styles/Boxes.css";

const Boxes = () => {
  return (
    <div className="BoxContainer">
      <div className="boxes">
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="imgs">
                <img src={item.img} alt="star" />
                <img src={item.img} alt="star" />
                <img src={item.img} alt="star" />
                <img src={item.img} alt="star" />
                <img src={item.img} alt="star" />
              </div>
              <h1>{item.title}</h1>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boxes;
