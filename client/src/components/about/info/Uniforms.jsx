import React from 'react'
import $ from "jquery"

import {uniforms, layout} from '../../../data/about/uniforms/data';

const Uniforms = () => {
  $("#0").css({opacity:"0","pointer-events":"none"});
  return (
    <div className="instance">
        {layout.map((data,key)=>{
            return(
                <h1 className="title">{data.title}</h1>
            );
        })}
        {uniforms.map((data,key)=>{
            return(
              <>
                <a className="uniform-card" key={key} id={data.id} href={data.link} target="_blank" rel="noreferrer">
                    <h3>{data.title}</h3>
                    <p><span>$</span>{data.price}</p>
                </a>
              </>
            );
        })}
    </div>
  )
}

export default Uniforms