import React from 'react'
import $ from "jquery";

import Card from "./modules/Card";
import { programCardData } from '../../data/programs/data';

const Programs = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".programs__container").removeClass("dark");
    } else {
      $(".programs__container").addClass("dark");
    }
  });
  return (
    <div className="programs__container container dark">
      <div className="container__wrapper">
        <div className="wrapper__cards">
          {programCardData.map((data,key)=>{
            return(
              <Card key={key} loc={data.loc} title={data.title}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Programs