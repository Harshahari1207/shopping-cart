import Cart from "./Cart";
import { Link } from "react-router-dom";
import crocsLogo from "../img/crocsLogo.svg";
const Nav = () => {
  return (
    <div className="nav">
      <div id="logo">
        <img id="logoImg" src={crocsLogo} alt="" />
        <h1>Fake Crocs Store</h1>
      </div>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Cart />
    </div>
  );
};

export default Nav;
