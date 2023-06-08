import React, { useState } from 'react'
import $ from "jquery";
import { Outlet } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import Header from './Header'

const Layout = () => {
  const default_cursor_color = localStorage.getItem("cursorColor");
  const default_cursor_follow_color = localStorage.getItem("cursorColor");

  const [theme, setTheme] = useState('light');
  $(document).mousemove(function (e) {
    $(".cursor").css({
      left: e.pageX,
      top: e.pageY
    });
    $(".cursor-follow").css({
      left: e.pageX,
      top: e.pageY
    });
    if(!localStorage.getItem("cursorColor")) {
      localStorage.setItem("cursorColor", "#a71624");
    }
  });
  $(document).ready(function () {
    $(".cursor").css({ background: default_cursor_color });
    $(".cursor-follow").css({ background: default_cursor_follow_color });
    if (isMobile) {
      $(".cursor").css({ display: "none" });
      $(".cursor-follow").css({ display: "none" });
    } else {
      $('.ul__link,button,a,Link,input,select').mouseover(function () {
        $(".cursor").css({ background: default_cursor_color });
        $(".cursor-follow").css({ background: default_cursor_follow_color });
        $(".cursor").css({ filter: "hue-rotate(210deg) brightness(300%)" });
        $(".cursor-follow").css({ filter: "hue-rotate(210deg) brightness(300%)" });
      });
      $('.ul__link,button,a,Link,input,select').mouseout(function () {
        $(".cursor").css({ background: default_cursor_color });
        $(".cursor-follow").css({ background: default_cursor_follow_color });
        $(".cursor").css({ filter: "hue-rotate(0deg) brightness(100%)" });
        $(".cursor-follow").css({ filter: "hue-rotate(0deg) brightness(100%)" });
      })
    }
    $(".wrapper__theme").unbind().click(function () {
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
      <div className="cursor"></div>
      <div className="cursor-follow"></div>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout