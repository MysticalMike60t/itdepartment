import React from 'react'
import $ from "jquery";

import russellImg from "../../../assets/images/RussellS-150x150.jpg";
import { russell } from '../../../data/about/contact/data';

const RussellInfo = () => {
    let email = russell.map((data)=>{return(data.email)});
    let mail = "mailto:" + email;
    $(document).ready(function() {
      if (localStorage.getItem("theme") === "dark") {
        $(".teacherInfo-wrapper").addClass("dark");
      } else {
        $(".teacherInfo-wrapper").removeClass("dark");
      }
    });
  return (
    <div className="teacherInfo-wrapper instance">
        <h1>{russell.map((data)=>{return(data.name)})}</h1>
        <div className="teacher info" style={{pointerEvents: "none"}}>
            <img src={russellImg} alt="" loading="lazy"/>
        </div>
        <p>
            <h2>{russell.map((data)=>{return(data.position)})}</h2>
            <a href={mail}>{email}</a>
            <p>{russell.map((data)=>{return(data.phone)})}</p>
        </p>
    </div>
  )
}

export default RussellInfo