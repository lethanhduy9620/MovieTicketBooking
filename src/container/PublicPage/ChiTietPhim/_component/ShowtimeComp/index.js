import React from "react";
import "./style_ShowtimeComp.scss";
import DateComp from "./_components/DateComp.js";
import FilmListComp from "./_components/FilmComp";
import IconComp from "./_components/IconComp.js";
import ShowtimeDetailComp from "./_components/ShowtimeDetailComp.js";

export default function ShowtimeComp() {
  return (
    <div className="ShowtimeComp-wrapper ">
      <div className="container-lg">
        <div className="row">
          <div className="ShowtimeComp-content col-12 col-lg-9 g-xl-0 pe-lg-4">
            <h3 className="content-title">Lịch chiếu</h3>
            <div className="content-container">
              <DateComp />
            </div>
            <div className="content-container">
              <IconComp />
            </div>
            <div className="content-container">
              <ShowtimeDetailComp />
            </div>
          </div>
          <div className="film-list-container d-none d-lg-block col-lg-3 g-0">
            <h3 className="content-title">Phim đang chiếu</h3>
            <FilmListComp />
          </div>
        </div>
      </div>
    </div>
  );
}
