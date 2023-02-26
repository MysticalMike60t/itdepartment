import {React,useEffect,useState} from 'react'
import grassotechItLogo from '../images/grassotechItLogo.svg';
import { Link } from "react-router-dom";
import ReactSwitch from 'react-switch';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import hData from "../data/header/data";

const Header = () => {
    // let nav = [data.pg1, data.pg2, data.pg3, data.pg4];
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
                            <li><Link to={data.link} className="headerNavigationLink" key={key}><span className="material-symbols-outlined icon">{data.icon}</span><div>{data.text}</div></Link></li>
                        );
                    })}
                </div>
            </ul>
        </div>
        
        /*
        <div className="headerContainer">
            <ul>
                <li>
                    <a href="#">
                        <HomeIcon className="headerIcon" />
                        <div>
                            <h1>Home</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <AccountTreeIcon className="headerIcon" />
                        <div>
                            <h1>Projects</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BookmarksIcon className="headerIcon" />
                        <div>
                            <h1>Boomarks</h1>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <Brightness6Icon className="headerIcon" />
                        <div>
                            <h1>Theme</h1>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        */
    )
}

export default Header