import Cart from "./Cart";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <h1>LOGO</h1>
      <ul>
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
