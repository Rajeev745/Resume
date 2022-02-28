import React from "react";
import Input from "./Input";
import Show from "./Show";
import "../../Style/Experience.css";

export default function Experience() {
  return (
    <div className="content">
      <div className="content-child">
        <div className="input">
          <Input />
        </div>
        <div className="show">
          <Show />
        </div>
      </div>
    </div>
  );
}
