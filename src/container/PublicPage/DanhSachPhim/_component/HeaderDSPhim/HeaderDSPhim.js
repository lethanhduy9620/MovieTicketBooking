import React from "react";
import { Link } from "react-router-dom";
import "./style_HeaderDSPhim.scss";

export default function HeaderDSPhim(props) {
  let tenTrang = null;
  props.url === "/phim-dang-chieu"
    ? (tenTrang = "Phim đang chiếu")
    : (tenTrang = "Phim sắp chiếu");

  return (
    <div className="header-wrapper">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12 title-container g-0">
            <h1>{tenTrang}</h1>
            <ul className="breadcumb">
              <li>
                <Link to="/">Home</Link>
                <span>{">"}</span>
              </li>
              <li className="active">{tenTrang}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
