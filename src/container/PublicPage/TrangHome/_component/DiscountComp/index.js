import React from "react";
import "./style_DiscountComp.scss";

export default function DiscountComp() {
  return (
    <section id="discountComp" className="discount-wrapper">
      <div className="container-md py-5">
        <h2 className="header">Khuyến mãi</h2>
        <div className="row">
          <div className="col-6  col-lg-3 my-5 img-container">
            <img className="img-fluid" src="./images/KM-01.jpg" alt="" />
          </div>
          <div className="col-6 col-lg-3 my-5 img-container">
            <img className="img-fluid" src="./images/KM-02.jpg" alt="" />
          </div>
          <div className="col-6 col-lg-3 my-5 img-container">
            <img className="img-fluid" src="./images/KM-03.jpg" alt="" />
          </div>
          <div className="col-6 col-lg-3 my-5 img-container">
            <img className="img-fluid" src="./images/KM-04.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
