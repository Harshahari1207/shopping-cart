const totalPrice = (cartItems) => {
  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum = sum + cartItems[i].price * cartItems[i].quantity;
  }
  return sum;
};

export default totalPrice;
