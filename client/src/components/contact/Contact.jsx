import React from 'react'
import $ from "jquery";
import { motion as m } from "framer-motion"

import ContactInfo from './modules/ContactInfo';

import { transition } from '../../data/global/data';

const Contact = () => {
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".contactContainer").removeClass("dark");
    } else {
      $(".contactContainer").addClass("dark");
    }
  });
  return (
    <m.div className="contactContainer container dark">
      <ContactInfo />
    </m.div>
  )
}

export default Contact