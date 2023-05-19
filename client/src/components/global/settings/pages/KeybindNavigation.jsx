import React from 'react'

const KeybindNavigation = () => {
  setInterval(function () {
    if (document.getElementById("check").checked) {
      if (localStorage.getItem("keybindActivation") === "true") {
        localStorage.setItem("keybindActivation", false);
      } else {
        localStorage.setItem("keybindActivation", true);
      }
    }
  }, 1)
  return (
    <div className="setting__wrapper">
      <div className="wrapper__activation">
        <div className="universal_wrapper_object">
          <label class="activation__checkbox">
            <input id="check" type="checkbox" className='checkbox__input' name="keybindActivation" />
            <span>Turn on keyboard Navigation</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default KeybindNavigation