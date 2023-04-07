import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartProvider";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <CartProvider>
          <Routes>
            <Route path="shopping-cart/" exact Component={Home} />
            <Route path="shopping-cart/contact" Component={Contact} />
            <Route path="shopping-cart/shop" Component={Shop} />
            <Route path="shopping-cart/cart" Component={Cart} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
