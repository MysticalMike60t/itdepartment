import React from 'react'
import {uniforms, layout} from '../../../data/about/uniforms/data';

const Uniforms = () => {
  /*useEffect(()=>{
    document.getElementById(data.id).onclick = function() { window.open(data.link) }
  })*/
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
        <br />
        <br />
        <br />
    </div>
  )
}

export default Uniforms