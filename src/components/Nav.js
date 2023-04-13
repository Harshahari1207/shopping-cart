import { Link } from "react-router-dom";
import crocsLogo from "../img/crocsLogo.svg";
import cartLogo from "../img/cart.svg";
import { useState } from "react";
const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (color, event) => {
    if (activeButton) {
      activeButton.style.backgroundImage = "";
    }
    event.target.style.backgroundImage = color;
    setActiveButton(event.target);
  };
  return (
    <div className="nav">
      <div id="logo">
        <img id="logoImg" src={crocsLogo} alt="" />
        <h1>Fake Crocs Store</h1>
      </div>
      <ul className="nav-links">
        <Link to="shopping-cart/">
          <div
            className="navElement"
            onClick={(event) =>
              handleButtonClick(
                "linear-gradient(to right, #579bb1, #4e7c92, #435e71, #354250, #252931, #252931, #252931, #252931, #354250, #435e71, #4e7c92, #579bb1)",
                event
              )
            }
          >
            <li>Home</li>
          </div>
        </Link>
        <Link to="shopping-cart/shop">
          <div
            className="navElement"
            onClick={(event) =>
              handleButtonClick(
                "linear-gradient(to right, #579bb1, #4e7c92, #435e71, #354250, #252931, #252931, #252931, #252931, #354250, #435e71, #4e7c92, #579bb1)",
                event
              )
            }
          >
            <li>Shop</li>
          </div>
        </Link>
        <Link className="navElement" to="shopping-cart/contact">
          <div
            onClick={(event) =>
              handleButtonClick(
                "linear-gradient(to right, #579bb1, #4e7c92, #435e71, #354250, #252931, #252931, #252931, #252931, #354250, #435e71, #4e7c92, #579bb1)",
                event
              )
            }
          >
            <li>Contact</li>
          </div>
        </Link>
      </ul>
      <div
        onClick={(event) =>
          handleButtonClick(
            "linear-gradient(to right, #579bb1, #7fabc4, #a2bcd4, #c3cfe1, #dfe2ee, #dfe2ee, #dfe2ee, #dfe2ee, #c3cfe1, #a2bcd4, #7fabc4, #579bb1)",
            event
          )
        }
        className="cartMain"
      >
        <Link to="shopping-cart/cart">
          <img id="cartLogo" src={cartLogo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
