import React from 'react'
import $ from "jquery";

import Cards from './Cards';

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
        <Cards />
    </div>
  )
}

export default Programs