import { useState } from "react";
import uniqid from "uniqid";
import crocs1 from "../img/crocs1.png";
import crocs2 from "../img/crocs2.png";
import crocs3 from "../img/crocs3.png";
import crocs4 from "../img/crocs4.png";
import crocs5 from "../img/crocs5.png";
import crocs6 from "../img/crocs6.png";
import crocs7 from "../img/crocs7.png";
import crocs8 from "../img/crocs8.png";
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
    {
      id: uniqid(),
      imgsrc: crocs5,
      price: 3371,
      description: "Classic All-Terrain Light Grey Unisex Sandal",
    },
    {
      id: uniqid(),
      imgsrc: crocs6,
      price: 3371,
      description: "Classic All-Terrain Khaki/Multi Unisex Sandal",
    },
    {
      id: uniqid(),
      imgsrc: crocs7,
      price: 4495,
      description: "Crocs Boca Pearl Khaki Women Wedge",
    },
    {
      id: uniqid(),
      imgsrc: crocs8,
      price: 4495,
      description: "Mellow Marbled Mushroom/Cobblestone Unisex Slide",
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
