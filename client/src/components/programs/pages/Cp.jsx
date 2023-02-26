import React from 'react';
import $ from "jquery";

import Para from "./comps/Para";
import cp from "./json/cp.json";

function Cp() {
  let jName = cp;
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "dark") {
      $(".container").addClass("dark");
    } else {
      $(".container").removeClass("dark");
    }
  });
  return (
    <div className="container">
        <div className="page-wrapper">
          <Para title={jName.title_1} text={jName.text_1} />
          <Para title={jName.title_2} text={jName.text_2}/>
          <Para title={jName.title_3} text={jName.text_3}/>
          { // <Para title="" text=""/>
          }
        </div>
    </div>
  );
}

export default Cp;
