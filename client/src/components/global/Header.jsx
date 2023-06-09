import { React } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";

import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import SettingsIcon from '@mui/icons-material/Settings';

import grassotechItLogo from '../../assets/images/logos/grassotechItLogo.svg';

import hData from "../../data/header/data";

const Header = () => {
    let prevUrl = undefined;

    $(document).ready(function () {
        setInterval(() => {
            const currUrl = window.location.href;
            if (currUrl !== prevUrl) {
                prevUrl = currUrl;
                if (localStorage.getItem("theme") === "light") {
                    $(".header__container").removeClass("dark");
                } else {
                    $(".header__container").addClass("dark");
                }
            }
        }, 60);
        $(".wrapper__settings").unbind().click(function () {
            window.location.pathname = "/settings";
        })
    });
    return (
        <div className="header__container dark" id="header">
            <div className="container__logo">
                <Link to="/" className='logo__link'>
                    <img src={grassotechItLogo} alt="homeLinkImage" />
                </Link>
            </div>
            <div className='container__nav'>
                <ul className='nav__ul'>
                    {hData.map((data, key) => {
                        return (
                            <li key={key}><Link to={data.link} className="ul__link" key={key}><span className="material-symbols-outlined icon">{data.icon}</span><div>{data.text}</div></Link></li>
                        );
                    })}
                </ul>
            </div>
            <div className="header__actions">
                <div className="actions__wrapper">
                    <button className="wrapper__theme" name="changeTheme">
                        <BrightnessMediumIcon className='theme__icon' />
                    </button>
                    <button className="wrapper__settings" name="settings">
                        <SettingsIcon className='settings__icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header