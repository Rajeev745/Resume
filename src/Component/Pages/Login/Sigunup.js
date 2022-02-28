import React, { useState } from "react";
import "../../Style/Login.css";
import { app } from "../../../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Sigunup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authentication = getAuth();
  const handleSubmit = () => {
    createUserWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      }
    ).catch(err=>console.log(err))
  };

  return (
    <div className="login">
      <div className="login-heading">PLEASE Signup</div>
      <div className="username">
        <label>username</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="userpassword">
        <lapel>Password</lapel>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="login-button">
        <button onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
}
