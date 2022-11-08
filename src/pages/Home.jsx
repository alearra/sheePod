import { useState } from "react";
import React from "react";
import "../assets/styles/styles.css"
import ovejas from "../assets/static/sheeps.gif";

export const Home = () => {
  const [cuenta, setCuenta] = useState(0);
  const handleClick = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div className="home">

    
      <div className="box">
      <img src={ovejas} />
      <h6>sheePod</h6>
        {cuenta === 0 ? (
          <h1>Sweet dreams 🌙</h1>
        ) : (
          <div>
            {cuenta === 50 ? (
              <h1>SLEEP NOW! 🤷‍♂️</h1>
            ) : (
              <h1>{cuenta} 🐑</h1>
            )}
          </div>
        )}
        <button onClick={handleClick}>Sheep</button>
      </div>
    </div>
  );
};
