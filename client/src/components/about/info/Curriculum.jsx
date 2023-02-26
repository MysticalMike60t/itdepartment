import React from 'react'
import { items, cards, head } from "../../../data/about/curriculum/data";

const Curriculum = () => {
  return (
    <div className="inst learning">
      <h1>Curriculum</h1>
      <table>
        <thead>
          <tr>
            {head.map((data, key) => {
              return (
                <th key={key}>{data.title} {data.grade}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {items.map((data, key) => {
              return (
                <td key={key}>
                  {data.credits}
                </td>
              );
            })}
          </tr>
          <tr>
            {items.map((data, key) => {
              return (
                <td key={key}>
                  {data.subject}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      {cards.map((data,key)=>{
        return(
          <div className="card" key={key}>
            <h1 key={key}>{data.title} <span>-</span> Grade {data.grade}</h1>
            <p key={key}>{data.text}</p>
          </div>
        );
      })}
      <div className="card">
        <p>Students successfully completing this course of study will be able to pursue a two-year computer technology degree at state colleges and universities or go on to a four-year computer engineering degree. Students can obtain immediate employment in the Information Technology area. Jobs include: help desk assistant, sales, systems technician and database maintenance, to name a few. Students graduating from Information Technology also find great success in the military in fields like communications, information management and information technician.</p>
        <br/>
      </div>
    </div>
  )
}

export default Curriculum