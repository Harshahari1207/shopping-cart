import { useContext } from "react";
import { CartContext } from "./CartProvider";
const Cart = () => {
  console.log("cartItems");
  const {cartItems} = useContext(CartContext)
  console.log(cartItems)
  return (
    <div id="cart">
      <h1>Cart</h1>
      <div className="cartElements">
          {
            cartItems.map((item)=>(
              <h1>{item.quantity}</h1>
            ))
          }
        {/* <div className="cartItems">
          {cartItems.map((card) => {
            return (
              <div className="cardDiv" key={card.id}>
                <img src={card.imgsrc} alt="" />
                <p>{card.description} </p>
                <p className="price"> ₹ {card.price} </p>
                <div>
                  <button>➖</button>
                  <p>1</p>
                  <button>➕</button>
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
