import React from 'react'
import $ from "jquery";

import Head from './Head';

export const Home = () => {
  let style = {background: "$primary-1"};
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "dark") {
      $(".homeContainer").addClass("dark");
    } else {
      $(".homeContainer").removeClass("dark");
    }
  });
  return (
    <div className="homeContainer container" style={style}>
      <Head />
    </div>
  )
}

export default Home