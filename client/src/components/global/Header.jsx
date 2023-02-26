import {React,useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";

import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

import grassotechItLogo from '../../assets/images/logos/grassotechItLogo.svg';

import hData from "../../data/header/data";

const Header = () => {
    $(document).ready(function() {
        if (localStorage.getItem("theme") === "dark") {
          $(".headerContainer").addClass("dark");
        } else {
          $(".headerContainer").removeClass("dark");
        }
      });
    return (
        <div className="headerContainer" id="header">
            <div className="logo">
                <Link to="/" className='logoLink'>
                    <img src={grassotechItLogo} alt="homeLinkImage" />
                </Link>
            </div>
            <ul>
                <div>
                    {hData.map((data, key)=>{
                        return(
                            <li key={key}><Link to={data.link} className="headerNavigationLink" key={key}><span className="material-symbols-outlined icon">{data.icon}</span><div>{data.text}</div></Link></li>
                        );
                    })}
                </div>
            </ul>
            <div className="theme-changer-wrapper">
                <button className="theme-changer">
                    <BrightnessMediumIcon className='theme-icon'/>
                </button>
            </div>
        </div>
    )
}

export default Header