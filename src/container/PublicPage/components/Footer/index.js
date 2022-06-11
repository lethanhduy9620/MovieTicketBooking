import React from "react";
import "./style_Footer.scss";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-lg">
        <div className="row footer-content g-0">
          <div className="col-12 col-sm-8 col-md-3 col-lg-3 col-item1">
            <a href="#">
              <img className="logo" src="/images/logo1.png" alt="" />
            </a>
            <div>
              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p>
                Call us: <a href="#">(+01) 202 342 6789</a>
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md col-item2">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blockbuster</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 col-md col-item3">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 col-md col-item4">
            <h4>Account</h4>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Watchlist</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">User Guide</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 col-md col-item5">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter system now <br /> to get latest news
              from us.
            </p>
            <form action="#">
              <input type="text" placeholder="Enter your email..." />
            </form>
            <a href="#">Subscribe now</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
