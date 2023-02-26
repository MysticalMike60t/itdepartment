import React, { useEffect } from 'react'
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
  useEffect(()=>{
    if (window.innerWidth <= 500) {
          phone_e.onclick = function() {
            show(data.phone);
          }
          email_e.onclick = function() {
            window.location.href = "mailto:" + email;
          }
          address_e.onclick = function() {
            show(data.address);
          }
        /*phone_e.addEventListener("click", show(data.phone));
        email_e.addEventListener("click", show(data.email));
        address_e.addEventListener("click", show(data.address));*/
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