import React from 'react';
import $ from "jquery";

import Para from "./comps/Para";
import cna from "./json/cna.json";

function Cna() {
  let jName = cna;
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
          <Para title={jName.title_2} text={jName.text_2} />
          <Para title={jName.title_3} text={jName.text_3} />
          <Para title={jName.title_4} text={jName.text_4} />
        </div>
    </div>
  );
}

export default Cna;
