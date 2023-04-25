import React from 'react';
import $ from "jquery";
import { GoogleCharts } from 'google-charts';

import Para from "./comps/Para";
import cna from "./json/cna.json";

export default function Cna() {
  let jName = cna;
  $(document).ready(function () {
    if (localStorage.getItem("theme") === "light") {
      $(".container").removeClass("dark");
    } else {
      $(".container").addClass("dark");
    }
  });
  return (
    <div className="page-container container dark">
      <div className="page-wrapper">
          <Para title={jName.title_1} text={jName.text_1} />
          <Para title={jName.title_2} text={jName.text_2} />
          <Para title={jName.title_3} text={jName.text_3} />
          <Para title={jName.title_4} text={jName.text_4} />
      </div>
    </div>
  );
}