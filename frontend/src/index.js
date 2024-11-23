import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/Home/HomePage";
import Signin from "./landing_page/Signin";
import Register from "./landing_page/Register";
import RestaurantRegister from "./landing_page/Restaurant";
import Menu from "./landing_page/Menu";
import Cart from "./landing_page/Home/Cart";
import OnlineCart from "./landing_page/Home/OnlineCart";
import { CartProvider } from "./landing_page/Home/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/Restaurant" element={<RestaurantRegister />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OnlineCart" element={<OnlineCart />} />
      </Routes>
      <Footer />
    </CartProvider>
  </BrowserRouter>
);
