import React from 'react'
import $ from "jquery";

import ContactInfo from './ContactInfo';

const Contact = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "dark") {
      $(".contactContainer").addClass("dark");
    } else {
      $(".contactContainer").removeClass("dark");
    }
  });
  return (
    <div className="contactContainer container">
      <ContactInfo />
    </div>
  )
}

export default Contact