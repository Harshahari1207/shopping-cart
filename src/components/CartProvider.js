import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (card) => {
    console.log(cartItems);
    const index = cartItems.findIndex((item) => item.id === card.id);

    if (index === -1) {
      const newCard = { ...card, quantity: 1 };
      setCartItems([...cartItems, newCard]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity++;
      setCartItems(newCartItems);
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
