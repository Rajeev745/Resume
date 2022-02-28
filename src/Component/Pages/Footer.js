import React from "react";
import "../Style/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box">
        <div className="bo">Terms and Conditions</div>
        <div className="bo">Privacy Policy</div>
        <div className="bo">Contact us</div>
        <div className="bo">About us</div>
        <div className="bo">Accessibility</div>
      </div>
      <div className="copyright">
        <span>
          Copyright © 2022 Specter Technologies Limited SEZC. All rights
          reserved.
        </span>
      </div>
      <div className="logo">
        <img src="https://www.resumenerd.com/images/nerd-logo-grey.svg" />
      </div>
    </div>
  );
}
