import React from 'react'
import $ from "jquery";

import Card from "./modules/Card";
import { programCardData } from '../../data/programs/data';

const Programs = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "dark") {
      $(".programsContainer").addClass("dark");
    } else {
      $(".programsContainer").removeClass("dark");
    }
  });
  return (
    <div className="programsContainer container">
      <div className="cards-wrapper">
        {programCardData.map((data,key)=>{
          return(
            <Card key={key} loc={data.loc} title={data.title}/>
          )
        })}
      </div>
    </div>
  )
}

export default Programs