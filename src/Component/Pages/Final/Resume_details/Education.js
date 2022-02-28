import React from "react";
import "../../../Style/FinalResume/Education.css";
import {useSelector} from 'react-redux'

export default function Education() {
  let obj=useSelector(state=>state.EducationReducer)
  return (
    <>
      <div className="tag"></div>
      <div className="degree">{obj.degree}</div>
      <div className="cllg">{obj.school}</div>
      <div className="date">{obj.date}</div>
      <div className="address">
          <p>{obj.city}</p>
          <p>{obj.country}</p>
      </div>
      <div className="des">{obj.description}</div>
    </>
  );
}
