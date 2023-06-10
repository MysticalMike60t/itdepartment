import React from 'react'
import carpenterImg from "../../../assets/images/CarpenterS-150x150.jpg";
import { carpenter } from '../../../data/about/contact/data';

const CarpenterInfo = () => {
    let email = carpenter.map((data)=>{return(data.email)});
    let mail = "mailto:" + email;
  return (
    <div className="teacherInfo-wrapper instance">
        <h1>{carpenter.map((data)=>{return(data.name)})}</h1>
        <div className="teacher info" style={{pointerEvents: "none"}}>
            <img src={carpenterImg} alt="" loading="lazy"/>
        </div>
        <p>
            <h2>{carpenter.map((data)=>{return(data.position)})}</h2>
            <a href={mail}>{email}</a>
            <p>{carpenter.map((data)=>{return(data.phone)})}</p>
        </p>
    </div>
  )
}

export default CarpenterInfo