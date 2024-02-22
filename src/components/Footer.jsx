import React from "react";
import Logo from "../photos/logoBlack.png";
import "../style/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="name-container">
        <img src={Logo} alt="Logo" />
        <p>
          Electronics product actual teachings of the great explorer of the
          truth, the malder of human happiness. No one rejects
        </p>
      </div>

      <div className="link-container">
        <div>
          <h3>Catogories</h3>
          {/* <Link to={}>Mobile</Link> */}
          <p>Laptops</p>
          <p>Headphones</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Login</p>
          <p>Register</p>
          <p>Favourites</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Address: Mumbai, Maharashtra</p>
          <p>Email: ishitajain382@gmail.com</p>
          <p>Phone: +91 8237662481</p>
        </div>
      </div>

      <div className="copyright-container">
        <p>Copyright@2024 TechShop | Designed and Developed by Ishita Jain</p>
      </div>
    </div>
  );
}
