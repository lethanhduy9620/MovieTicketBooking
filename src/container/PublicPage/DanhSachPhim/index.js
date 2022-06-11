import React, { useEffect, useState } from "react";
import HeaderDSPhim from "./_component/HeaderDSPhim/HeaderDSPhim";
import { actFetchDSPhimDangChieu } from "./modules/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
// import ThePhim from "./_component/ThePhim";
import ThePhim from "./../components/ThePhim";
import "./style_DSPhim.scss";

export default function DanhSachPhim(props) {
  const loading = useSelector((state) => state.dsPhimDangChieuReducer.loading);
  const dsPhimDangChieu = useSelector(
    (state) => state.dsPhimDangChieuReducer.dsPhimDangChieu
  );
  const dsPhimSapChieu = useSelector(
    (state) => state.dsPhimDangChieuReducer.dsPhimSapChieu
  );
  const dispatch = useDispatch();
  const url = props.match.url;

  useEffect(() => {
    dispatch(actFetchDSPhimDangChieu());
  }, []);

  const renderDSPhim = (data) => {
    return data?.map((phim) => {
      return <ThePhim key={phim.maPhim} phim={phim} />;
    });
  };

  if (loading) return <Loader />;

  return (
    <section id="movieListPage">
      <HeaderDSPhim url={url} />
      <div className="movie-list-wrapper">
        <div className="container-lg">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  row-cols-xl-5 movie-card-container">
            {url === "/phim-dang-chieu"
              ? renderDSPhim(dsPhimDangChieu)
              : renderDSPhim(dsPhimSapChieu)}
          </div>
        </div>
      </div>
    </section>
  );
}
