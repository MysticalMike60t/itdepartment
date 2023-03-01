import React from 'react'
import $ from "jquery"

import data from "../../data/contact/data.json";

const Contacts = () => {
  let email = data.email;
  let link = "mailto:" + email;
  let pText = "Phone:";
  let pTextSub;
  let eText = "Email:";
  let eTextSub;
  let aText = "Address:";
  let aTextSub;
  const phone_e = document.getElementById("phone");
  const email_e = document.getElementById("email");
  const address_e = document.getElementById("address");
  const show = (item) => {
    alert(item);
  }
  if (window.innerWidth <= 500) {
    pTextSub = pText.substring(0,pText.length-1);
    eTextSub = eText.substring(0,eText.length-1);
    aTextSub = aText.substring(0,aText.length-1);
  }
  $(document).ready(function(){
    if (window.innerWidth <= 500) {
      $("#phone").unbind().click(function() {
        show(data.phone);
      });
      $("#email").unbind().click(function() {
        window.location.href = "mailto:" + email;
      });
      $("#address").unbind().click(function() {
        show(data.address);
      });
}
  })
  return (
    <div className="info-wrapper">
      <h4 id="phone">{pTextSub} <span>{data.phone}</span></h4>
      <h4 id="email">{eTextSub} <a href={link}>{email}</a></h4>
      <h4 id="address">{aTextSub} <span>{data.address}</span></h4>
    </div>
  )
}

export default Contacts