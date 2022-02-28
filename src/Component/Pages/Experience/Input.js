import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../Style/Experience.css";
import { experienceFill } from "../../../Redux/Action/action";

export default function Input() {
  let obj=useSelector(state=>state.ExperienceReducer)
  const [form,setform]=useState({})
  const handleChange=(e)=>{
    let {name,value}=e.target;
    setform({...form,[name]:value});
  }
  let dispatch=useDispatch();
  const submit=()=>{
    dispatch(experienceFill(form))
  }


  return (
    <div className="content-wrapper">
      <div className="headline">Work Experience</div>
      <div className="subheadline">
        Tell us about your with most recent experience
      </div>
      <div className="name-exp">
        <label>Job Title</label><br/>
        <input type="text" name="job_title" onChange={(e)=>handleChange(e)} />
      </div>
      <div className="name-exp">
        <label>Company</label><br/>
        <input type="text" name="company" onChange={(e)=>handleChange(e)} />
      </div>
      <div className="name-exp">
        <div className="city">
          <label>City Name</label>
          <br />
          <input type="text" name="city" onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="country">
          <label>Country</label>
          <br />
          <input type="text" name="country" onChange={(e)=>handleChange(e)} />
        </div>
      </div>
      <div className="name-exp">
        <label>Start Date</label>
        <br />
        <input type="date" name="date1" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="name-exp">
        <label>End Date</label>
        <br />
        <input type="date" name="date2" onChange={(e)=>handleChange(e)}/>
      </div>
      <div className="name-exp">
        <input type="checkbox" />
        <span>Currently work here</span>
      </div>
      <div className="name-exp">
       <Link to="/education">
       <button onClick={submit}>Enter job Description</button>
       </Link> 
      </div>
      <Link to="/about">
      <div className="back">Back</div>
      </Link>
    </div>
  );
}
