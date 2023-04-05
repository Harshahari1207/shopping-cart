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
            <Route path="/" exact Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/shop" Component={Shop} />
            <Route path="/cart" Component={Cart} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
