import React from 'react'
import $ from "jquery"

import data from "../../../data/contact/data.json";

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    /* ✅ Copied successfully */
  } catch (e) {
    /* ❌ Failed to copy (insufficient permissions) */
    console.log(e);
  }
}

const Contacts = () => {
  let email = data.email;
  let link = "mailto:" + email;
  let displayEmail = email;
  let pText = "Phone:";
  let pTextSub;
  let eText = "Email:";
  let eTextSub;
  let aText = "Address:";
  let aTextSub;
  let arText = "Area:";
  let arTextSub;
  const show = (item) => {
    alert(item);
  }
  if (window.innerWidth <= 500) {
    pTextSub = pText.substring(0, pText.length - 1);
    eTextSub = eText.substring(0, eText.length - 1);
    aTextSub = aText.substring(0, aText.length - 1);
    arTextSub = arText.substring(0, arText.length - 1);
  } else if (window.innerWidth <= 960) {
    displayEmail = "Email Director";
  }
  $(document).ready(function () {
    if (window.innerWidth <= 500) {
      $("#phone").unbind().click(function () {
        copyToClipboard(data.phone);
      });
      $("#email").unbind().click(function () {
        window.location.href = "mailto:" + email;
      });
      $("#address").unbind().click(function () {
        copyToClipboard(data.address);
      });
      $("#area").unbind().click(function () {
        copyToClipboard(data.area);
      });
    }
  })
  return (
    <>
      <div className="info-wrapper">
        <h4 id="phone">{pTextSub} <span>{data.phone}</span></h4>
        <h4 id="email">{eTextSub} <a href={link}>{displayEmail}</a></h4>
        <h4 id="address">{aTextSub} <span>{data.address}</span></h4>
        <h4 id="area">{arTextSub}<span>{data.area}</span></h4>
      </div>
    </>
  )
}

export default Contacts