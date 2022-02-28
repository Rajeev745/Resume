import React, { useRef } from "react";
import Resume from "./Resume";
import Sidebar from "./Sidebar";
import "../../Style/Final.css";
import { useSelector } from "react-redux";

export default function Final() {
  const obj = useSelector((state) => state.StyleReducer);
  let styling = "styling" + obj.fontStyle;
  let resumeRef = useRef();
  return (
    <div className="content">
      <div className="content-resume">
        <div className="resume-parent">
          <div className="resume" id={`${styling}`}>
            <Resume ref={resumeRef} />
          </div>
        </div>
        <div className="sidebar-content">
          <Sidebar resumeRef={resumeRef} />
        </div>
      </div>
    </div>
  );
}
