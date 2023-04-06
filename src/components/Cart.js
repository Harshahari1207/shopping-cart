import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartProvider";
import totalPrice from "./totalPrice";

const CartItem = ({ item, decrement, increment }) => {
  return (
    <div id="cartDiv" className="cardDiv" key={item.id}>
      <img className="image" src={item.imgsrc} alt="" />
      <h4>{item.description}</h4>
      <p>₹ {item.price} </p>
      <div className="incrDecrBut">
        <button onClick={() => decrement(item)}>➖</button>
        <p id="quantity">{item.quantity}</p>
        <button onClick={() => increment(item)}>➕</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cartItems: contextCartItems } = useContext(CartContext);

  useEffect(() => {
    setCartItems(contextCartItems);
  }, [contextCartItems]);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalPrice(cartItems));
  }, [cartItems]);

  const decrement = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== item.id)
      );
    }
    setTotal(totalPrice(cartItems));
  };

  const increment = (item) => {
    item.quantity++;
    setTotal(totalPrice(cartItems));
  };

  console.log(cartItems);
  return (
    <div id="cart">
      <div className="cartLeft">
        <h1>Your Cart Items</h1>
        <div className="cartItem">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              decrement={decrement}
              increment={increment}
            />
          ))}
        </div>
      </div>

      <div className="cartRight">
        <div className="cartRightItems">
          <h3>Total</h3>
          <p>₹ {total} </p>
          <div className="buttons">
            <button>Checkout</button>
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
