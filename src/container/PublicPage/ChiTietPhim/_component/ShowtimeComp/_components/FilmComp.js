import React from "react";
import { useSelector } from "react-redux";
import { FaThumbsUp } from "react-icons/fa";
export default function FilmListComp() {
  const dsPhimDangChieu = useSelector(
    (state) => state.dsPhimDangChieuReducer.dsPhimDangChieu
  );
  const showtimeData = useSelector((state) => state.lichChieuPhimReducer.data);

  let currentFilmId = null;
  if (showtimeData) {
    currentFilmId = showtimeData.maPhim;
  }

  const filterDsPhimDangChieu = (filmId, numberRenderedFilm) => {
    let filmList = [];
    let count = 0;
    for (let film of dsPhimDangChieu) {
      if (film.maPhim !== filmId && count < numberRenderedFilm) {
        filmList.push(film);
        count++;
      } else if (count >= numberRenderedFilm) {
        break;
      }
    }

    return filmList;
  };

  const renderFilm = (filmId, numberRenderedFilm) => {
    const filmList = filterDsPhimDangChieu(filmId, numberRenderedFilm);

    return filmList.map((film) => {
      return (
        <div className="film-container" key={film.maPhim}>
          <div className="film-image">
            <a href={`/chi-tiet-phim/${film.maPhim}`}>
              <img src={film.hinhAnh} alt={film.tenPhim} />
            </a>
          </div>
          <div className="film-content">
            <a href={`/chi-tiet-phim/${film.maPhim}`}>{film.tenPhim}</a>
            <FaThumbsUp />
            <span>{film.danhGia}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <>{dsPhimDangChieu && currentFilmId && renderFilm(currentFilmId, 2)}</>
  );
}
