import { useState } from "react";
import uniqid from "uniqid";
import crocs1 from "../img/crocs1.png";
import crocs2 from "../img/crocs2.png";
import crocs3 from "../img/crocs3.png";
import crocs4 from "../img/crocs4.png";
const Shop = () => {
  const [cards, setCard] = useState([
    {
      id: uniqid(),
      imgsrc: crocs1,
      price: 2597,
      description: "Classic Bone Unisex Clog",
    },
    {
      id: uniqid(),
      imgsrc: crocs2,
      price: 3057,
      description: "Bayaband Black/White Unisex Clog",
    },
    {
      id: uniqid(),
      imgsrc: crocs3,
      price: 2922,
      description: "Crocband Light Grey/Navy Unisex Clog",
    },
    {
      id: uniqid(),
      imgsrc: crocs4,
      price: 2657,
      description: "Off Road Sports II Khaki/Army Green Unisex Clog",
    },
  ]);
  return (
    <div id="shop">
      {cards.map((card) => {
        return (
          <div className="cardDiv" key={card.id}>
            <img src={card.imgsrc} alt="" />
            <p>{card.description} </p>
            <p className="price"> ₹ {card.price} </p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
