/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="overlap-group">
        <div className="rectangle" />
        <div className="frame">
          <div className="text-wrapper">explore</div>
          <div className="text-wrapper">adventure</div>
          <div className="text-wrapper">luxury</div>
          <div className="text-wrapper">enjoy</div>
          <div className="text-wrapper">explore</div>
        </div>
      </div>
    </div>
  );
};
