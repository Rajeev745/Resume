import React from "react";
import "../Style/Header.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
       <Link to="/">
        <img src="https://cdn1.resumenerd.com/images/logo-resume-nerd.svg"></img>
       </Link>
      </div>
      <div className="routes">
        <Link to="/about">
          <div className="route">Contact Info</div>
        </Link>
        <div className="rou">
          <MdOutlineArrowForwardIos />
        </div>
        <Link to="/experience">
          <div className="route">Work Experience</div>
        </Link>
        <div className="rou">
          <MdOutlineArrowForwardIos />
        </div>
        <Link to="/education">
          <div className="route">Education</div>
        </Link>
        <div className="rou">
          <MdOutlineArrowForwardIos />
        </div>
        <Link to="/skills">
          <div className="route">Skills</div>
        </Link>
        <div className="rou">
          <MdOutlineArrowForwardIos />
        </div>
        <Link to="/summary">
          <div className="route">Summary</div>
        </Link>
      </div>
      <div className="userinfo">
        <div className="contact">CONTACT US</div>
        <Link to="/login">
        <div className="login">LOGIN</div>
        </Link>
      </div>
    </div>
  );
}
