import React from 'react'
import $ from "jquery";

import Teachers from './Teachers';

const about = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "dark") {
      $(".aboutContainer").addClass("dark");
    } else {
      $(".aboutContainer").removeClass("dark");
    }
  });
  return (
    <div className="aboutContainer container">
        <Teachers />
    </div>
  )
}

export default about