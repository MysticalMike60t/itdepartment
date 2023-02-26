import React from 'react'
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards-wrapper">
        <Card loc="cirs" title="Computer and Information Research Scientists" />
        <Card loc="cna" title="Computer Network Architects" />
        <Card loc="cp" title="Computer Programmers" />
        <Card loc="css" title="Computer Support Specialists" />
        <Card loc="csa" title="Computer Systems Analysts" />
        <Card loc="da" title="Database Administrators" />
        <Card loc="isa" title="Information Security Analysts" />
        <Card loc="ncsa" title="Network and Computer Systems Administrators" />
        <Card loc="sd" title="Software Developers" />
        <Card loc="wd" title="Web Developer" />
        { /* <Card loc="/" title="" /> */ }
    </div>
  )
}

export default Cards