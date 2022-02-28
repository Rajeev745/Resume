import React from "react";
import { useSelector } from "react-redux";
import "../../Style/Final.css";
import Education from "./Resume_details/Education";
import Experience from "./Resume_details/Experience";
import Introduction from "./Resume_details/Introduction";
import Skills from "./Resume_details/Skills";

export default function Resume() {
  let obj = useSelector((state) => state.SummaryReducer);
  let colorObj=useSelector((state)=>state.StyleReducer)
  let color="intro"+colorObj.color
  return (
    <>
      <div className="intro" id={`${color}`}>
        <Introduction />
      </div>
      <div className="outro">
        <div className="leftbar">
          <div className="final-experience">
            <Experience />
          </div>
          <div className="final-education">
            <Education />
          </div>
          <div className="final-skills">
            <Skills/>
          </div>
        </div>
        <p>{obj.textarea}</p>
      </div>
    </>
  );
}
