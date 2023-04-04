import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/shop" Component={Shop} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
