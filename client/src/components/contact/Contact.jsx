import React from 'react'
import $ from "jquery";

import ContactInfo from './modules/ContactInfo';

const Contact = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".contact__container").removeClass("dark");
    } else {
      $(".contact__container").addClass("dark");
    }
  });
  return (
    <div className="contact__container container dark">
      <ContactInfo />
    </div>
  )
}

export default Contact