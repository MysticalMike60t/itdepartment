import { React } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";
import { isMobile } from 'react-device-detect';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import homeHeadTitleData from "../../data/home/head/data";
import { footerLinks_left, footerLinks_right } from "../../data/home/data"

import bgVideo001 from "../../assets/videos/Pexels Videos 2278095.mp4";
import bgVideo002 from "../../assets/videos/Pexels Videos 946146.mp4";
import bgVideo003 from "../../assets/videos/production ID_4167404.mp4";
import bgVideo004 from "../../assets/videos/video.mp4";

export const Home = () => {
  const vids = [
    bgVideo001,
    bgVideo002,
    bgVideo003,
    bgVideo004
  ]
  let vidOut = vids[Math.floor(Math.random() * 4)];
  let style = { background: "$primary-1" };
  if(isMobile) {
    vidOut = null;
  }
  $(document).ready(function () {
    setInterval(function () {
      if (localStorage.getItem("theme") === "light") {
        $(".home__container").removeClass("dark");
        $(".head__container").removeClass("dark");
      } else {
        $(".home__container").addClass("dark");
        $(".head__container").addClass("dark");
      }
    }, 1000);
    if (localStorage.getItem("theme") === "light") {
      $(".home__container").removeClass("dark");
      $(".head__container").removeClass("dark");
    } else {
      $(".home__container").addClass("dark");
      $(".head__container").addClass("dark");
    }
    if (window.innerWidth <= 1345) {
      $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.shortenedText) }));
    } else {
      $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.text) }));
    }
    $(window).resize(function () {
      if (window.innerWidth <= 1345) {
        $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.shortenedText) }));
      } else {
        $(".title__h1").html(homeHeadTitleData.map((data) => { return (data.text) }));
      }
    });
    if (isMobile) {
      $(".wrapper__a").css({ display: "none" });
      $(".background__video").css({ display: "none" });
    }
  });
  return (
    <div className="home__container container dark" style={style}>
      <div className="head__container" id="h">
        <div className="container__background">
          <video src={vidOut} class="background__video" type="video/mp4" autoPlay muted loop />
        </div>
        <div className="container__wrapper">
          <div className="wrapper__title">
            <h1 className="title__h1">_</h1>
          </div>
          <h2 className='wrapper__h2'>{homeHeadTitleData.map((data) => { return (data.subText) })}</h2>
          <a className='wrapper__a' href="#actions" name="Go Down">
            <ArrowDropDownIcon className="a__icon" />
          </a>
          <span className="wrapper__background"></span>
        </div>
        <div className="container__actions" id="actions">
          <Link className="actions__button" to="/jobs"><span>Jobs</span></Link>
          <Link className="actions__button" to="/info"><span>Info</span></Link>
          <Link className="actions__button" to="/contact"><span>Contact</span></Link>
        </div>
        <footer className="container__footer" id="footer">
          <h1>Other Links</h1>
          <div className="footer__wrapper">
            <div className="wrapper__left">
              {footerLinks_left.map((data, key) => {
                return (
                  <a className='left__link' href={data.link} key={key}>{data.text}</a>
                )
              })}
            </div>
            <div className="wrapper__right">
              {footerLinks_right.map((data, key) => {
                return (
                  <a className='right__link' href={data.link} key={key}>{data.text}</a>
                )
              })}
            </div>
          </div>
          <div className="footer__feedback">
            <Link to="/feedback" className='feedback__link'>Submit Feedback</Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home