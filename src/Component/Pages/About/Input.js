import React, { useState } from "react";
import "../../Style/About.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formFill } from "../../../Redux/Action/action";

export default function Input() {
  let obj = useSelector((state) => state.FormReducer);

  const [form, setfrom] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setfrom({ ...form, [name]: value });
  };
  console.log(form);
  let dispatch = useDispatch();
  const submit = () => {
    dispatch(formFill(form));
  };

  return (
    <div className="content-wrapper">
      <div className="headline">Tell us about yourself</div>
      <div className="subheadline">
        With this info, recruiters will be able to find you.
      </div>
      <div className="name">
        <label>Name</label>
        <br />
        <input type="text" name="name" onChange={(e) => handleChange(e)} />
      </div>
      <div className="name">
        <label>Email</label>
        <br />
        <input type="email" name="email" onChange={(e) => handleChange(e)} />
      </div>
      <div className="name">
        <label>Street Address</label>
        <br />
        <input type="text" name="address" onChange={(e) => handleChange(e)} />
      </div>
      <div className="name">
        <label>City</label>
        <br />
        <input type="text" name="city" onChange={(e) => handleChange(e)} />
      </div>
      <div className="name">
        <label>Country</label>
        <br />
        <input type="text" name="country" onChange={(e) => handleChange(e)} />
      </div>
      <div className="name">
        <div className="phone">
          <label>Phone No</label>
          <br />
          <input type="text" name="phone" onChange={(e) => handleChange(e)} />
        </div>
        <div className="phone">
          <label>Additional No</label>
          <br />
          <input
            type="text"
            name="additional_phone"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="name">
        <Link to="/experience">
          <button onClick={submit}>Save ans Continue</button>
        </Link>
        <div className="back">
          <MdArrowBackIosNew />
          Back
        </div>
      </div>
    </div>
  );
}
