import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { navigationLinks } from '../../data/global/settings/data'

const Settings = () => {
  return (
    <div className="settings__container container dark">
      <div className="container__navigation">
        {navigationLinks.map((data, key) => {
          return (
            <Link className="navigation__button" to={data.to} key={key}>{data.text}</Link>
          )
        })}
      </div>
      <div className="container__setting">
        <Outlet />
      </div>
    </div>
  )
}

export default Settings