import React from 'react'

const Para = ({title,text}) => {
  return (
    <div className="text-wrapper">
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="sep"></div>
    </div>
  )
}

export default Para