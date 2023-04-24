import React from 'react'
import { items, cards, head } from "../../../data/about/curriculum/data";

const Curriculum = () => {
  return (
    <div className="instance learning">
      <div className='learning__title'>
        <h1 className="title__h1">
          Curriculum
        </h1>
      </div>
      <div className="display display-credits">
        {items.map((data,key)=>{
          return(
            <span className="item" key={key}><span>{data.credits}</span> <p className="text">Credits</p> </span>
          )
        })}
      </div>
      <div className="display display-subject">
        {items.map((data,key)=>{
          return(
            <span className="item item-subject" key={key}><span className="grade">{head[key].grade}</span><span className='subject'>{data.subject}</span></span>
          )
        })}
      </div>
      {/* <div className="learing__seperator"></div> */}
      {cards.map((data,key)=>{
        return(
          <div className="card" key={key}>
            <h1 key={key}>{data.title} <span>-</span> Grade {data.grade}</h1>
            <p key={key}>{data.text}</p>
          </div>
        );
      })}
      <div className="card last">
        <p>Students successfully completing this course of study will be able to pursue a two-year computer technology degree at state colleges and universities or go on to a four-year computer engineering degree. Students can obtain immediate employment in the Information Technology area. Jobs include: help desk assistant, sales, systems technician and database maintenance, to name a few. Students graduating from Information Technology also find great success in the military in fields like communications, information management and information technician.</p>
        <br/>
      </div>
    </div>
  )
}

export default Curriculum