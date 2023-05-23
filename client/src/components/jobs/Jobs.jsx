import React from 'react'
import $ from "jquery";

import Card from "./modules/Card";
import { programCardData } from '../../data/jobs/data';

const Jobs = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".jobs__container").removeClass("dark");
    } else {
      $(".jobs__container").addClass("dark");
    }
  });
  return (
    <div className="jobs__container container dark">
        <div className="container__wrapper">
          {programCardData.map((data,key)=>{
            return(
              <Card key={key} loc={data.loc} title={data.title}/>
            )
          })}
        </div>
    </div>
  )
}

export default Jobs