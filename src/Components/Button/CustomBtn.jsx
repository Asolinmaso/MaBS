import React from "react";
import "./Btn.css";

const CustomBtn = ({ children }) => {
  return (
    <button className="custom-btn" style={{ "--btn-text": `"${children}"` }}>
      <div className="left"></div>
      <div className="text">{children}</div>
      <div className="right"></div>
    </button>
  );
};

export default CustomBtn;
