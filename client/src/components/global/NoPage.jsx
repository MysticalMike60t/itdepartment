import React from 'react'
import $ from "jquery"
import { Link } from "react-router-dom";

const NoPage = () => {
  let loc = window.location.pathname;
  $(document).ready(function(){
    if (localStorage.getItem("theme") === "light") {
      $(".nopage").removeClass("dark");
    } else {
      $(".nopage").addClass("dark");
    }
  })
  return (
    <div className="nopage">
      <h1 className='nopage__h1'>We do not have "<i>{loc}</i>" on our site.</h1>
      <Link to="/" className='nopage__link'>Home</Link>
    </div>
  )
}

export default NoPage