import React, { useState } from 'react'
import $ from "jquery"

import Title from '../modules/Title'

const Cursor_color = () => {
  let i = 0;
  let [cursorColor, setCursorColor] = useState('');
  const handleChange = (event) => {
    i++;
    if (cursorColor.includes("#")) {
      setCursorColor(event.target.value);
    } else {
      setCursorColor("#" + event.target.value);
      localStorage.setItem("cursorColor", "#" + event.target.value);
    }
    localStorage.setItem("cursorColor", cursorColor);
  }
  $(document).ready(function(){
    if(!localStorage.getItem("cursorColor")) {
      setCursorColor("#a71624");
      localStorage.setItem("cursorColor", "#a71624");
    }
    $("#reloadButton").unbind().click(function(){
      window.location.reload();
    })
  })
  return (
    <div className="setting__wrapper">
      <Title title="Cursor Color" />
      <div className="wrapper__dot">
        <div className="dot__frame">
          <div className="frame__dot" style={{"background": cursorColor}}></div>
        </div>
        <div className="dot__group">
          <input type="text" className="group__input" id="dot-group_color-view" placeholder="#a71624" value={cursorColor} onChange={handleChange} />
          <input type="color" className="group__input" id="dot-group_color" value={cursorColor} onChange={handleChange} />
        </div>
        <button id="reloadButton">Load new Cursor</button>
      </div>
      {/* <div className="wrapper__follow">
        <div className="follow__frame"></div>
        <div className="follow__group">
          <input type="text" className="group__input" id="follow-group_color" />
        </div>
      </div> */}
    </div>
  )
}

export default Cursor_color