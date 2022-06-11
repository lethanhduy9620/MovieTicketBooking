import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CarouselComp from "./_component/Carousel";
import actBannerFetchData from "./_component/Carousel/modules/action";
import DanhSachPhimComp from "./_component/DanhSachPhim";
import actFetchPhim from "./_component/DanhSachPhim/modules/action";
import DiscountComp from "./_component/DiscountComp";

export default function TrangHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    //Call API to get Banner Data
    dispatch(actBannerFetchData());

    //Call API to get Film Data
    dispatch(actFetchPhim());
  }, []);

  return (
    <section id="homePage">
      <CarouselComp />
      <DanhSachPhimComp />
      <DiscountComp />
    </section>
  );
}
