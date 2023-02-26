import React from 'react'
import { Link, Outlet } from "react-router-dom";

import nav from "../../data/about/nav/data";

const Teachers = () => {
  return (
    <>
        <div className="teachers-wrapper">
            <div className="nav">
              {nav.map((data, key)=>{
                return(
                  <Link className='t-btn' to={data.link} key={key}>{data.text}</Link>
                );
              })
              }
            </div>
            <Outlet />
        </div>
    </>
  )
}

export default Teachers