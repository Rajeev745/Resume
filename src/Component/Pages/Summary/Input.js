import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/Summary.css";
import { useDispatch } from "react-redux";
import { summaryFill } from "../../../Redux/Action/action.js";

export default function Input() {
  const [form, setform] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(summaryFill(form));
  };

  return (
    <div className="content-wrapper">
      <div className="headline">Summary</div>
      <div className="subheadline">Please Briefly Describe Yourself</div>
      <div className="summary">
        <textarea
          rows="18"
          cols="65"
          placeholder="Tell us about yourself"
          name="textarea"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div className="submit1">
        <Link to="/final">
          <button onClick={handleClick}>Submit</button>
        </Link>
      </div>
      <Link to="/skills">
        <div className="back">Back</div>
      </Link>
    </div>
  );
}
