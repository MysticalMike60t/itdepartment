import React from 'react'
import { Link } from "react-router-dom";

const NoPage = () => {
  let loc = window.location.pathname;
  return (
    <div className="nopage">
      <h1>We do not have "<i>{loc}</i>" on our site.</h1>
      <Link to="/" className='link'>Home</Link>
    </div>
  )
}

export default NoPage