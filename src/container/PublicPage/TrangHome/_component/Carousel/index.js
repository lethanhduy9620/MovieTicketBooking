import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./style_Carousel.scss";

export default function CarouselComp() {
  const dataBanner = useSelector((state) => state.bannerReducer.dataBanner);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderBanner = () => {
    return dataBanner?.content.map((banner, index) => {
      return (
        <div key={index}>
          <img src={banner.hinhAnh} alt={`banner_${index}`} />
        </div>
      );
    });
  };

  return (
    <section className="carousel-wrapper">
      <div className="container-md">
        <Slider {...settings}>{renderBanner()}</Slider>
      </div>
    </section>
  );
}
