import { useContext } from "react";
import { CartContext } from "./CartProvider";
const Cart = () => {
  console.log("cartItems");
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div id="cart">
      <div className="cartLeft">
        <h1>Your Cart Items</h1>
        <div className="cartItem">
          {cartItems.map((item) => (
            <div id="cartDiv" className="cardDiv" key={item.id}>
              <img className="image" src={item.imgsrc} alt="" />
              <h4>{item.description}</h4>
              <p>{item.price} </p>
              <div className="incrDecrBut">
                <button>➖</button>
                <p>{item.quantity}</p>
                <button>➕</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cartRight">
        <h3>Total</h3>
        <div className="buttons">
          <button>Checkout</button>
          <button>Close</button>
        </div>
        {/* <div className="cartItems">
          {cartItems.map((card) => {
            return (
              <div className="cardDiv" key={card.id}>
                <img src={card.imgsrc} alt="" />
                <p>{card.description} </p>
                <p className="price"> ₹ {card.price} </p>
                <div>
                  
                </div>
              </div>
            );
          })}
        </div>
        <h2></h2>
        <button>Checkout</button>
        <button>Close</button> */}
      </div>
    </div>
  );
};
export default Cart;
