import React from 'react';
import $ from "jquery";

import Para from "./comps/Para";
import cp from "./json/cp.json";

function Cp() {
  let jName = cp;
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".container").removeClass("dark");
    } else {
      $(".container").addClass("dark");
    }
  });
  return (
    <div className="container dark">
        <div className="page-wrapper">
          <Para title={jName.title_1} text={jName.text_1} />
          <Para title={jName.title_2} text={jName.text_2}/>
          <Para title={jName.title_3} text={jName.text_3}/>
        </div>
    </div>
  );
}

export default Cp;
