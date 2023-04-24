import { React } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";
import { motion as m } from "framer-motion"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import homeHeadTitleData from "../../data/home/head/data";

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
  let style = {background: "$primary-1"};
  $(document).ready(function() {
    if (localStorage.getItem("theme") === "light") {
      $(".homeContainer").removeClass("dark");
      $(".headContainer").removeClass("dark");
    } else {
      $(".homeContainer").addClass("dark");
      $(".headContainer").addClass("dark");
    }
    $("h2").html(homeHeadTitleData.map((data)=>{return(data.subText)}));
    setInterval(() => {
      if (window.innerWidth <= 1345) {
        $(".title__h1").html(homeHeadTitleData.map((data)=>{return(data.shortenedText)}));
      } else {
        $(".title__h1").html(homeHeadTitleData.map((data)=>{return(data.text)}));
      }
    }, 1);
  });
  return (
    <m.div className="homeContainer container dark" style={style}>
      <div className="headContainer" id="h">
        <div className="bg">
          <video src={vidOut} type="video/mp4" autoPlay muted loop/>
        </div>
        <div className="center-img">
          <div className="center-img__title">
            <h1 className="title__h1">_</h1>
          </div>
          <h2>_</h2>
          <a className='center-img__a' href="#actions">
            <ArrowDropDownIcon className="button__icon scroll"/>
          </a>
          <span className="bg"></span>
        </div>
        <div className="actions" id="actions">
          <Link className="button" to="/programs"><span>Programs</span></Link>
          <Link className="button" to="/info"><span>Info</span></Link>
          <Link className="button" to="/contact"><span>Contact</span></Link>
        </div>
      </div>
    </m.div>
  )
}

export default Home