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



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} /> {/* Home route */}
      <Route path="/register" element={<Register />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/Restaurant" element={<RestaurantRegister />} />
     
    </Routes>
    <Footer />
  </BrowserRouter>
);
