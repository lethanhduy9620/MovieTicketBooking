import React from "react";
import clsx from "clsx";
import "./style_ThePhim.scss";
import { Link } from "react-router-dom";

export default function ThePhim(props) {
  const { phim } = props;

  return (
    <div className="movie-card col">
      <Link to={`/chi-tiet-phim/${phim.maPhim}`}>
        <img src={phim.hinhAnh} alt={phim.tenPhim} />
      </Link>
      <div className="movie-name-container">
        <Link to={`/chi-tiet-phim/${phim.maPhim}`}>{phim.tenPhim}</Link>
      </div>
    </div>
  );
}
