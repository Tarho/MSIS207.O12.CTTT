import React from "react";
import "./footerStyle.css";
import "font-awesome/css/font-awesome.min.css";
function Footer() {
  return (
    <div className="ft">
      <div className="footer-web">
        <div className="footer-section">
          <h1>SHOP</h1>
          <p>268 Elizaberth Ave Str, Brooklyn, CA, 90025</p>
          <p>+0082 561 43 34</p>
          <p>support@durotan.com</p>
          <div className="social">
            <i class="fa-brands fa-twitter fa-spin-pulse fa-lg"></i>{" "}
            <i class="fa-brands fa-facebook fa-spin-pulse fa-lg"></i>
            <i class="fa-brands fa-instagram fa-spin-pulse fa-lg"></i>
          </div>
        </div>

        <div className="footer-section">
          <h1>FAQS</h1>
          <p>Information</p>
          <p>Payment</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>Gift Card</p>
          <p>Guest purchase</p>
          <p>Electronic receipt</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="footer-section">
          <h1>COMPANY</h1>
          <p>About Shop</p>
          <p>Contact</p>
          <p>Careers</p>
          <p>Our Journals</p>
        </div>

        <div className="footer-section-final">
          <h1>INSTAGRAM</h1>
          <p>Following or tag us withs #durotan, @durotan</p>
          <div className="pic-ins">
            <img src="https://cdn.cliqueinc.com/posts/286094/shoes-to-wear-with-dresses-286094-1692353166448-image.700x0c.jpg" />
            <img src="https://ydbrand.imgix.net/YD/PWA-Products/Y233FC11_WHT_CROP.png?bg=e6e6e6&fm=jpg&format=pjpg&h=425&q=75&rect=440%2C0%2C2120%2C3000&w=300&auto=format%2Ccompress&fit=cover&cs=tinysrgb&dpr=2&ch=Width%2CDPR" />
            <img src="https://s3.r29static.com/bin/entry/ac8/x,80/1258466/sneaker-1.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16cOJvbCZKVTYSs2Mqxpu_Alq6tAxvfH01g&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtON158-GyuhVgBMZj-9bVSLqzAnhQdv6Yow&usqp=CAU" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQTtvufoY2TQwpiD_Lqi6hXW8lpG4FrywKW2cjYXnMlUZdUl7yaPAMRh1AvXIrhjHa8Q&usqp=CAU" />
          </div>
        </div>
      </div>
      <div className="small-line-footer"></div>
      <div className="footer-below">
        <div className="reserved">
          @ 2023 <span>MSIS207 - O12</span> . All rights reserved
        </div>
        <div className="icon-link">
          <span>ACCEPT FOR </span>
          <img src="https://durotan-fashion.myshopify.com/cdn/shop/files/payment_ef2dcab9-feab-4a52-80b2-d13053ddefdc_2000x.png?v=1655036319" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
