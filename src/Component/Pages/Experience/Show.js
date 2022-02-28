import React from "react";
import "../../Style/Experience.css";

export default function Show() {
  return (
    <>
      <div className="img"></div>
      <div className="tips">
        <div class="tips-container">
          <h3 class="text-center">Work Experience Tips</h3>
          <ul className="list">
            <li>
              <span>
                Start with your most recent job and continue in order until your
                first job.
              </span>
            </li>
            <li>
              <span>
                Recruiters look for candidates that closely match the required
                experience and responsibilities mentioned in the job listing. Be
                sure to review them while completing this section!
              </span>
            </li>
            <li>
              <span>
                Having trouble with your job description? Insert and edit our
                industry specific pre-written examples directly into your
                resume!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
