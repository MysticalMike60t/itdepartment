import React from 'react'
import $ from "jquery";
import { Link, Outlet } from "react-router-dom";
import { motion as m } from "framer-motion"

import nav from "../../data/about/nav/data";

const about = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".aboutContainer").removeClass("dark");
    } else {
      $(".aboutContainer").addClass("dark");
    }
  });
  return (
    <m.div className="aboutContainer container dark">
        <div className="teachers-wrapper">
            <div className="nav">
              {nav.map((data, key)=>{
                return(
                  <Link className='t-btn' to={data.link} key={key}>{data.text}</Link>
                );
              })
              }
            </div>
            <Outlet />
        </div>
    </m.div>
  )
}

export default about