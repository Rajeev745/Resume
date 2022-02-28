import React from "react";
import "../../Style/About.css";
import Input from "./Input";
import Show from "./Show";

export default function AboutYourSelf() {
  return (
    <div className="content">
      <div className="content-child">
        <div className="input"><Input/></div>
        <div className="show">
          <Show/>
        </div>
      </div>
    </div>
  );
}
