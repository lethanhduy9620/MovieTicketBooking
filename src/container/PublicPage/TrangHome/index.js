import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import CarouselComp from "./_component/Carousel";
import actBannerFetchData from "./_component/Carousel/modules/action";
import DanhSachPhimComp from "./_component/DanhSachPhim";
import actFetchPhim from "./_component/DanhSachPhim/modules/action";
import DiscountComp from "./_component/DiscountComp";

export default function TrangHome() {
  const loadingMovies = useSelector(
    (state) => state.homePhimDangChieuReducer.loading
  );

  const loadingBanners = useSelector((state) => state.bannerReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    //Call API to get Banner Data
    dispatch(actBannerFetchData());

    //Call API to get Film Data
    dispatch(actFetchPhim());
  }, []);

  if (loadingBanners || loadingMovies) return <Loader />;
  return (
    <section id="homePage">
      <CarouselComp />
      <DanhSachPhimComp />
      <DiscountComp />
    </section>
  );
}
