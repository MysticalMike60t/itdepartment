import React from 'react'
import $ from "jquery";

import Card from "./modules/Card";
import { programCardData } from '../../data/programs/data';

const Programs = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".programsContainer").removeClass("dark");
    } else {
      $(".programsContainer").addClass("dark");
    }
  });
  return (
    <div className="programsContainer container dark">
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