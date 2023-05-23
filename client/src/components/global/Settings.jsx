import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className="settings__container container dark">
        <div className="container__navigation">
            {/* Remove Inactive on first one */}
            <Link className="navigation__button" to="/settings/cursor_color">Cursor Color</Link>
            {/* <Link className="navigation__button inactive_default" to="/settings/keybind_navigation">Keybind Navigation</Link>
            <Link className="navigation__button inactive_default" to="/settings/cursor_color">Cursor Color</Link> */}
        </div>
        <div className="container__setting">
            <Outlet />
        </div>
    </div>
  )
}

export default Settings