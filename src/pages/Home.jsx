import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/home.css";
import Carousel from "../components/Carousel";
import BannerImage1 from "../photos/BannerImage1.png";
import BannerImage2 from "../photos/BannerImage2.jpg";
import Card from "../components/Card";
import image1 from "../photos/image1.png";
import image2 from "../photos/image2.png";
import image3 from "../photos/image3.png";

export default function Home() {
  const cardItems = [
    {
      img: image1,
      detailName: "Acer Predator Helios 300",
      detailPrice: "₹1,40,990",
    },
    {
      img: image2,
      detailName: "iPhone 14 pro max",
      detailPrice: "₹1,39,900.00",
    },
    {
      img: image3,
      detailName: "Titan Smart Smartwatch",
      detailPrice: "₹8,995",
    },
    {
      img: image1,
      detailName: "Acer Predator Helios 300",
      detailPrice: "₹1,40,990",
    },
    {
      img: image2,
      detailName: "iPhone 14 pro max",
      detailPrice: "₹1,39,900.00",
    },
  ];

  const images = [BannerImage1, BannerImage2];
  return (
    <div className="main-page">
      <div>
        <Navbar />
      </div>

      {/* carousel start */}
      <div>
        <Carousel images={images} />
      </div>

      {/* carousel end */}

      {/* offers start */}
      <div className="offer-container">
        <div className="FS-offer-item">Free Shipping</div>
        <div className="MBG-offer-item">Money Back Guarantee</div>
        <div className="SP-offer-item">Secure Payement</div>
      </div>
      {/* offers end */}

      {/* latest-product start */}
      <div className="latest-product">
        <div>
          <hr className="horizontal-line" />
        </div>
        <p>Latest Product</p>
      </div>
      {/* latest-product end */}

      {/* product-card  */}
      <div className="card">
        {cardItems.map((item, index) => {
          return (
            <div className="card-items">
              <Card
                img={item.img}
                name={item.detailName}
                price={item.detailPrice}
                key={index}
              />
            </div>
          );
        })}
      </div>

      {/* footer start */}
      <div className="footer-container">
        <Footer />
      </div>
      {/* footer end */}
    </div>
  );
}
