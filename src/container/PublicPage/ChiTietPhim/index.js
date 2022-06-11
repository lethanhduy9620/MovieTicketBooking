import React, { useEffect } from "react";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { actFetchChiTietPhim } from "./_component/MovieDetailComp/modules/actions";
import { actFetchLichChieuPhim } from "./_component/ShowtimeComp/modules/actions";
import MovieDetailComp from "./_component/MovieDetailComp";
import ShowtimeComp from "./_component/ShowtimeComp";
import { actFetchDSPhimDangChieu } from "../DanhSachPhim/modules/actions";

export default function ChiTietPhim(props) {
  const loadingMovieDetail = useSelector(
    (state) => state.chiTietPhimReducer.loading
  );
  const loadingShowtimeData = useSelector(
    (state) => state.lichChieuPhimReducer.loading
  );
  const loadingDSPhimDangChieu = useSelector(
    (state) => state.dsPhimDangChieuReducer.loading
  );

  const dispatch = useDispatch();

  const showtimeData = useSelector((state) => state.lichChieuPhimReducer.data);

  useEffect(() => {
    const { id } = props.match.params;
    //Call API to get movie detailed information
    dispatch(actFetchChiTietPhim(id));

    //Call API to get movie's showtime information
    dispatch(actFetchLichChieuPhim(id));

    //Call APi to get current shown movies
    dispatch(actFetchDSPhimDangChieu());
  }, []);

  if (loadingMovieDetail || loadingShowtimeData || loadingDSPhimDangChieu)
    return <Loader />;

  return (
    <section id="movieDetailPage">
      <MovieDetailComp />
      {showtimeData && showtimeData.dangChieu && <ShowtimeComp />}
    </section>
  );
}
