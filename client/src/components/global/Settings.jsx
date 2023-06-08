import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className="settings__container container dark">
        <div className="container__navigation">
            <Link className="navigation__button" to="/settings/cursor_color">Cursor Color</Link>
        </div>
        <div className="container__setting">
            <Outlet />
        </div>
    </div>
  )
}

export default Settings