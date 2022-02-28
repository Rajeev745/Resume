import React, { useState } from "react";
import "../../Style/Skills.css";
import { AiFillDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Input() {
  const skillsArr = [
    { id: 1, skill: "Java" },
    { id: 2, skill: "Angular" },
    { id: 3, skill: "JavaScript" },
    { id: 4, skill: "ReactJs" },
    { id: 5, skill: "redux" },
  ];
  let [arr, setArr] = useState(skillsArr);
  let num = 7;
  const handlevalue = () => {
    setArr([...arr,{id:arr.length+1,skill:""}]);
    
  };
  const handleDelete=(id)=>{
    setArr(arr.filter(item=>{
      return item.id!=id
    }))
  }
  return (
    <div className="content-wrapper">
      <div className="headline">Skills</div>
      <div className="subheadline">Add your Skills</div>
      <div className="skills">
        {arr.map((item) => (
          <>
            <input
              className="input-skills"
              type="text"
              placeholder="Enter your Skills"
              value={item.skill}
              key={item.id}
            />
            <AiFillDelete className="icons" onClick={(id)=>handleDelete(item.id)} />
          </>
        ))}
      </div>
            <span className="add-skills" onClick={handlevalue}>
          <CgAdd />
          Add Skills
        </span>
      <div className="submit1">
        <Link to="/summary">
        <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}
