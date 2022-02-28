import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/Education.css";
import {useDispatch, useSelector} from 'react-redux'
import { educationFill } from "../../../Redux/Action/action";

export default function Input() {
  const obj=useSelector(state=>state.EducationReducer)
const [form,setform]=useState({})

const handleChange=(e)=>{
  let {name, value}=e.target;
  setform({...form,[name]:value})
}
const dispatch=useDispatch()
const submit=()=>{
  dispatch(educationFill(form))
}


  return (
    <div className="content-wrapper">
      <div className="headline">Education</div>
      <div className="subheadline">Tell us about your education</div>
      <div className="education-school">
        <label>School</label>
        <input type="text" name="school" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="education-school">
        <label>City</label>
        <input type="text" name="city" onChange={(e)=>handleChange(e)} />
      </div>
      <div className="education-school">
        <label>Country</label>
        <input type="text" name="country" onChange={(e)=>handleChange(e)} />
      </div>
      <div className="education-school">
        <label>Degree</label>
        <input type="text" name="degree" onChange={(e)=>handleChange(e)} />
      </div>
      <div className="education-school">
        <label>Graduation Date</label>
        <input type="date" name="date" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="education-school">
        <label>Description</label>
        <input type="text" name="description" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="education-school">
        <Link to="/skills">
          <button onClick={submit}>Save & Continue</button>
        </Link>
      </div>
      <Link to></Link><div className="back">back</div>
    </div>
  );
}
