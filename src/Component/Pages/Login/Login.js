import React, { useState } from "react";
import "../../Style/Login.css";
import { Link } from "react-router-dom";
import { app } from "../../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const authentication = getAuth();

  const handleSubmit = () => {
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        console.log(response);
      }
    ).catch(err=>console.log(err))
  };

  return (
    <div className="content">
      <div className="login">
        <div className="login-heading">PLEASE Login</div>
        <div className="username">
          <label>username</label>
          <br></br>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="userpassword">
          <lapel>Password</lapel>
          <br></br>
          <input type="password" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="login-button">
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className="login-signup">
          <Link to="/signup">
            <button className="login-signup-btn">
              Not a User Please signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
