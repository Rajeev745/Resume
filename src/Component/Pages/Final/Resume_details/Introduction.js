import React from "react";
import "../../../Style/Final.css";
import { useSelector } from "react-redux";

export default function Introduction() {
  let obj=useSelector(state=>state.FormReducer)
  console.log(obj);
  return (
    <>
      <div className="intro-image"></div>
      <div className="intro-sidebaar">
        <div className="intro-name">{obj.name}</div>
        <div className="intro-address">
          <div className="intro-email">{obj.email}</div>
          <div className="intro-phone">
            <div className="intro-phone1">{obj.phone}</div>
            <div className="intro-phone1">{obj.additional_phone}</div>
          </div>
          <div className="intro-address-street">
            <p className="street">{obj.address}</p>
            <div className="intro-city">
              <p>{obj.city} ,   </p>
              <p>{obj.country}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
