import React, { useState } from 'react'
import $ from "jquery";
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  const [theme, setTheme] = useState('light');
  $(document).ready(function () {
    $(".theme-changer").unbind().click(function () {
      if (theme === 'light') {
        setTheme('dark');
        $(".container").addClass("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme('light');
        $('.container').removeClass("dark");
        localStorage.setItem("theme", "light");
      }
    });
    if (localStorage.getItem("theme") === "dark") {
      $(".container").addClass("dark");
    } else {
      $('.container').removeClass("dark");
    }
  });
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout