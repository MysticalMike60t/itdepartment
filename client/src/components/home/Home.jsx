import { React } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";
import { motion as m } from "framer-motion"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { transition } from '../../data/global/data';
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
    $("h1").html(homeHeadTitleData.map((data,key)=>{return(data.text)}));
    $("h2").html(homeHeadTitleData.map((data,key)=>{return(data.subText)}));
    if (window.innerWidth <= 1345) {
      $("h1").html(homeHeadTitleData.map((data,key)=>{return(data.shortenedText)}));
    }
  });
  return (
    <m.div className="homeContainer container dark" style={style}>
      <div className="headContainer" id="h">
        <div className="bg">
          <video src={vidOut} type="video/mp4" autoPlay muted loop/>
        </div>
        <div className="center-img">
          <h1></h1>
          <h2></h2>
          <ArrowDropDownIcon className="scroll"/>
          <span className="bg"></span>
        </div>
        <div className="actions">
          <Link className="button" to="/programs"><span>Programs</span></Link>
          <Link className="button" to="/info"><span>Info</span></Link>
          <Link className="button" to="/contact"><span>Contact</span></Link>
        </div>
      </div>
    </m.div>
  )
}

export default Home