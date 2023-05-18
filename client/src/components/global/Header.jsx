import { React } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";
import { motion as m } from "framer-motion"

import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import SettingsIcon from '@mui/icons-material/Settings';

import grassotechItLogo from '../../assets/images/logos/grassotechItLogo.svg';

import hData from "../../data/header/data";

const Header = () => {

    $(document).ready(function () {
        if (localStorage.getItem("theme") === "light") {
            $(".header__container").removeClass("dark");
        } else {
            $(".header__container").addClass("dark");
        }
    });
    return (
        <m.div className="header__container dark" id="header">
            <div className="container__logo">
                <Link to="/" className='logo__link'>
                    <img src={grassotechItLogo} alt="homeLinkImage" />
                </Link>
            </div>
            <ul className='container__ul'>
                <div>
                    {hData.map((data, key) => {
                        return (
                            <li key={key}><Link to={data.link} className="ul__link" key={key}><span className="material-symbols-outlined icon">{data.icon}</span><div>{data.text}</div></Link></li>
                        );
                    })}
                </div>
            </ul>
            <div className="header__actions">
                <div className="actions__wrapper">
                    <button className="wrapper__theme">
                        <BrightnessMediumIcon className='theme__icon' />
                    </button>
                    <button className="wrapper__settings">
                        <SettingsIcon className='settings__icon' />
                    </button>
                </div>
            </div>
        </m.div>
    )
}

export default Header