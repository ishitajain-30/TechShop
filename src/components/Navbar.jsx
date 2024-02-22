import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../photos/Logo.png";
import "../style/navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="navbar-container-1">
          <div className="logo-name">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="name">TechShop</div>
          </div>

          <div className="search-box">
            <form className="form-container">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="   Search for brand, products and more"
                  className="input-box"
                />
              </div>
              <div className="search-icon-button">
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              </div>
            </form>
          </div>

          <div className="nav-links-container">
            <div className="account-container">
              <IconButton component={Link} to="/Account">
                <AccountCircleOutlinedIcon />
              </IconButton>
              <Link to="/Account" className="link">
                Account
              </Link>
            </div>

            <div className="favourite-container">
              <IconButton component={Link} to="/Favourites">
                <FavoriteBorderIcon />
              </IconButton>
              <Link to="/Favourites" className="link">
                Favourites
              </Link>
            </div>

            <div className="cart-container">
              <IconButton component={Link} to="/Cart">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Link to="/Cart" className="link">
                Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-container-2">
          <div className="left-container">
            <button className="catogories-container" onClick={handleOpen}>
              <MenuOutlinedIcon /> <p className="catogories">Catogories</p>
            </button>
            {isOpen ? (
              <ul>
                <li>Mobile</li>
                <li>Laptops</li>
                <li>Headphones</li>
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className="right-container">
            <div className="home">
              <Link to="/" className="link">
                Home
              </Link>
            </div>

            <div className="new-arrivals">
              <Link to="/NewArrivals" className="link">
                New Arrivals
              </Link>
            </div>

            <div className="deals">
              <Link to="/Deals" className="link">
                Deals
              </Link>
            </div>

            <div className="contact-us">
              <Link to="/ContactUs" className="link">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
