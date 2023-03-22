import React from 'react';
import $ from "jquery";

import Para from "./comps/Para";
import wd from "./json/wd.json";

function Wd() {
  let dateOfStudy = 2021;
  let jName = wd;
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
          <Para title={jName.title_2} text={<>{jName.text_2_1}<br/><br/>{jName.text_2_2}</>} />
          <Para title={jName.title_3 + dateOfStudy + ":"} text={jName.text_3} />
          <Para title={jName.title_4} text={jName.text_4} />
        </div>
    </div>
  );
}

export default Wd;
