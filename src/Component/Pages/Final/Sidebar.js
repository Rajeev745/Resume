import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorStyle } from "../../../Redux/Action/action.js";
import "../../Style/Final.css";
import ReactToPrint from "react-to-print";
// import {getInstance}

export default function Sidebar({resumeRef}) {
  let componentRef = useRef();
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let finalStyling = useSelector((state) => state.StyleReducer);
  let [styling, setStyling] = useState(finalStyling);
  let colorAdd = (e) => {
    let obj = { ...styling, color: e };
    setStyling(obj);
  };

  useEffect(() => {
    console.log(componentRef.current);
  }, []);

  const handleEvents = (e) => {
    let { value, name } = e.target;
    console.log(value, name);
    setStyling({ ...styling, [name]: value });
  };
  const dispatch = useDispatch();
  // let handleNext = () => {
  //   let resumeInstance = resumeRef.current.getInstance();
  //   resumeInstance.next();
  // };

  return (
    <div className="sidebar-content">
      <div className="sidebar-heading">
        <h2>Your Resume</h2>
        <p>What do you want to do next?</p>
      </div>
      <div className="sidebar-export">
        <div className="download">Download</div>
        <ReactToPrint
          trigger={() => <div className="download">Print</div>}
          content={()=>resumeRef.current}
        />
        <div className="download">Print</div>;
        <div className="download" id="hwllo">
          Email
        </div>
      </div>
      <div className="font-style">
        <select name="fontStyle" onChange={(e) => handleEvents(e)}>
          <option>--Font Style--</option>
          <option value="1">Cursive</option>
          <option value="2">Italic</option>
          <option value="3">Sans-sarif</option>
          <option value="4">fantasy</option>
        </select>
      </div>
      <div className="colors">
        <div className="theme">
          <p>Change Theme</p>
        </div>
        <div className="theme-color">
          {arr.map((item, idx) => (
            <button
              className="color1"
              id={`col${item}`}
              onClick={(a) => colorAdd(item + 1)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
