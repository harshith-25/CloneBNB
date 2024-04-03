import React from "react";
import Card from "./card";
import "./styles3.css";

function Cards({ list }) {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;