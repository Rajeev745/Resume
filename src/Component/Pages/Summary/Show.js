import React from "react";
import '../../Style/Summary.css'

export default function Show() {
  return (
    <><div className="img"></div>
    <div className="tips">

      <div class="tips-container">
        <h3 class="text-center">Summary Tips</h3>
        <ul className="list">
          <li>
            <span>
              This is the most read section of your resume and it's important to
              make a good first impression. Keep it short and easy to read.
            </span>
          </li>
          <li>
            <span>
              This is your sales pitch to the employer. Give them a brief
              overview of your skills and background and tie it back to what you
              can do for the company.
            </span>
          </li>
          <li>
            <span>
              Stand out to employers by writing a summary that is specific to
              the job you're applying to, so they want to keep reading the rest
              of your resume.
            </span>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}
