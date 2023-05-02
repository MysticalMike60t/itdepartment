import React, { useState } from 'react'
import $ from "jquery";
import { Outlet } from 'react-router-dom'
import Header from './Header'

import { Colors } from "../../data/global/data"

const Layout = () => {
  const default_cursor_color = Colors[0].color;
  const default_cursor_color_hover = Colors[1].color;
  const default_cursor_follow_color = "#941723";
  const default_cursor_follow_color_hover = "#6F58C9";

  const [theme, setTheme] = useState('light');
  $(document).mousemove(function(e) {
    $(".cursor").css({
      left: e.pageX,
      top: e.pageY
    });
    $(".cursor-follow").css({
      left: e.pageX,
      top: e.pageY
    });
  });
  $(document).ready(function () {
    $('.ul__link,button,a,Link,input,select').mouseover(function(){
      $(".cursor").css({background: default_cursor_color_hover});
      $(".cursor-follow").css({background: default_cursor_follow_color_hover});
    });
    $('.ul__link,button,a,Link,input,select').mouseout(function(){
      $(".cursor").css({background: default_cursor_color});
      $(".cursor-follow").css({background: default_cursor_follow_color});
    })
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
      <div className="cursor"></div>
      <div className="cursor-follow"></div>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout