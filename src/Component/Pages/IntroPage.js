import React, { useRef } from "react";
import "../Style/IntroPage.css";
import {Link} from 'react-router-dom'

export default function IntroPage() {
  const inputvalue=useRef()
  const handle=()=>{
    // alert()
    inputvalue.current.scrollIntoView()
  }
  return (
    <div className="content">
      <div className="getting-started" >
        <h2 ref={inputvalue}>Getting Started</h2>
        <ul className="unlist">
          <li>Save time and build your resume</li>
          <li>Download it in your favorite style and theme</li>
          <li>Find your Dream job</li>
        </ul>
        <Link to="/about">
          <div className="submit" onPointerOver={handle}>START</div>
        </Link>
      </div>
    </div>
  );
}
