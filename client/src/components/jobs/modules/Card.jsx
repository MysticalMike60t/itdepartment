import React from 'react';
import { Link } from "react-router-dom";

function Card({loc, title}) {
  return (
    <Link className="cards__card" to={"/jobs/" + loc}>
        <span>{"//"}</span> <h3>{title}</h3>
    </Link>
  );
}

export default Card;