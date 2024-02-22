import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Favourites from "../pages/Favourites";
import Cart from "../pages/Cart";
import NewArrivals from "../pages/NewArrivals";
import Deals from "../pages/Deals";
import ContactUs from "../pages/ContactUs";
import Product from "../pages/Product";

export default function Routee() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Account" element={<Account />} />
        <Route exact path="/Favourites" element={<Favourites />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/NewArrivals" element={<NewArrivals />} />
        <Route exact path="/Deals" element={<Deals />} />
        <Route exact path="/ContactUS" element={<ContactUs />} />
        <Route exact path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
}
