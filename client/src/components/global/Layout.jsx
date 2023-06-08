import React, { useState } from 'react'
import $ from "jquery";
import { Outlet } from 'react-router-dom'
import { isMobile } from 'react-device-detect';

import Header from './Header'

import homeHeadTitleData from "../../data/home/head/data";

const Layout = () => {
  // var first_visit = false;

  let prevUrl = undefined;

  const default_cursor_color = localStorage.getItem("cursorColor");
  const default_cursor_follow_color = localStorage.getItem("cursorColor");

  const cursor_hover = { filter: "hue-rotate(210deg) brightness(300%)" };

  const [theme, setTheme] = useState();

  const checkFirstVisit = () => {
    if (localStorage.getItem('was_visited')) {
      return;
    }
    // first_visit = true;
    localStorage.setItem("theme", "dark");
    localStorage.setItem('was_visited', 1);
  }

  const cursor_change = () => {
    $(".cursor").css({ background: default_cursor_color });
    $(".cursor-follow").css({ background: default_cursor_follow_color });
    $('.ul__link,button,a,Link,input,select').mouseover(function () {
      $(".cursor").css({ background: default_cursor_color });
      $(".cursor-follow").css({ background: default_cursor_follow_color });
      $(".cursor").css(cursor_hover);
      $(".cursor-follow").css(cursor_hover);
    });
    $('.ul__link,button,a,Link,input,select').mouseout(function () {
      $(".cursor").css({ background: default_cursor_color });
      $(".cursor-follow").css({ background: default_cursor_follow_color });
      $(".cursor").css({ filter: "hue-rotate(0deg) brightness(100%)" });
      $(".cursor-follow").css({ filter: "hue-rotate(0deg) brightness(100%)" });
    })
  }
  setInterval(() => {
    const currUrl = window.location.href;
    if (currUrl !== prevUrl) {
      prevUrl = currUrl;
      // console.log(`URL changed to : ${currUrl}`);
      setTheme(localStorage.getItem("theme"));
      cursor_change();
      if (window.innerWidth <= 1345) {
        $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.shortenedText) }));
      } else {
        $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.text) }));
      }
    }
  }, 60);
  $(document).mousemove(function (e) {
    $(".cursor").css({
      left: e.pageX,
      top: e.pageY
    });
    $(".cursor-follow").css({
      left: e.pageX,
      top: e.pageY
    });
    if (!localStorage.getItem("cursorColor")) {
      localStorage.setItem("cursorColor", "#a71624");
    }
  });
  $(document).ready(function () {
    checkFirstVisit();
    $(".cursor").css({ background: default_cursor_color });
    $(".cursor-follow").css({ background: default_cursor_follow_color });
    if (isMobile) {
      $(".cursor").css({ display: "none" });
      $(".cursor-follow").css({ display: "none" });
    } else {
      $(".cursor").css({ background: default_cursor_color });
      $(".cursor-follow").css({ background: default_cursor_follow_color });
      $('.ul__link,button,a,Link,input,select').mouseover(function () {
        $(".cursor").css({ background: default_cursor_color });
        $(".cursor-follow").css({ background: default_cursor_follow_color });
        $(".cursor").css(cursor_hover);
        $(".cursor-follow").css(cursor_hover);
      });
      $('.ul__link,button,a,Link,input,select').mouseout(function () {
        $(".cursor").css({ background: default_cursor_color });
        $(".cursor-follow").css({ background: default_cursor_follow_color });
        $(".cursor").css({ filter: "hue-rotate(0deg) brightness(100%)" });
        $(".cursor-follow").css({ filter: "hue-rotate(0deg) brightness(100%)" });
      })
    }
    $(".wrapper__theme").unbind().click(function () {
      if (theme === 'light' || !localStorage.getItem("theme") || localStorage.getItem("theme") === "" || localStorage.getItem("theme") === " ") {
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