import React from "react";
import "../../Style/About.css";

export default function Show() {
  return (
    <>
      <div className="img"></div>
      <div className="tips">
        <div className="tips-container">
          <h3 className="text-center">Contact Tips</h3>
          <ul className="list">
            <li>
              <span>
                You can put a preferred nickname in parenthesis like this: James
                (Ben) Adams.
              </span>
            </li>
            <li>
              <span>
                Use a professional sounding email address such as including your
                first and last name in your email address. Providing a Gmail
                address is preferable to AOL and Yahoo.
              </span>
            </li>
            <li>
              <span>
                Make sure your voicemail message includes your name and sounds
                professional.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
