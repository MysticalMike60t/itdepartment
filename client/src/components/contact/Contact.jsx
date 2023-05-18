import React from 'react'
import $ from "jquery";
import { motion as m } from "framer-motion"

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
    <m.div className="contact__container container dark">
      <ContactInfo />
    </m.div>
  )
}

export default Contact