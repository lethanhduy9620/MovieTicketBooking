import React from "react";
import { useSelector } from "react-redux";
import "./style_MovieDetail.scss";

export default function MovieDetailComp() {
  const data = useSelector((state) => state.chiTietPhimReducer.data);

  const renderNgayChieuPhim = () => {
    let ngayKhoiChieu = "Lorem ipsum";
    if (data?.ngayKhoiChieu) {
      ngayKhoiChieu = new Date(Date.parse(data.ngayKhoiChieu));
      ngayKhoiChieu = `${ngayKhoiChieu.getDate()}/${
        ngayKhoiChieu.getMonth() + 1
      }/${ngayKhoiChieu.getFullYear()}`;
    }
    return ngayKhoiChieu;
  };

  const renderNoiDungPhim = () => {
    let noiDung =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla saepe beatae qui";
    if (data?.moTa) {
      noiDung = data?.moTa.replace("<p>", "").replace("</p>", "");
    }
    return noiDung;
  };

  return (
    <div className="movie-detail-wrapper">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img">
              {/* Làm thêm hiệu ứng click vào hình sẽ mở ra khung chiếu trailẻ với đường dẫn được lấy từ youtube */}
              <img src={data?.hinhAnh} alt="" />
            </div>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-content">
              <h1 className="movie-title">{data?.tenPhim}</h1>
              <ul>
                <li>
                  Đánh giá: <span>{data?.danhGia}</span>
                </li>
                <li>
                  Ngày khởi chiếu: <span>{renderNgayChieuPhim()}</span>
                </li>
                <li>
                  Đạo diễn:<span> Lorem, ipsum</span>
                </li>
                <li>
                  Diễn viên:
                  <span> Lorem ipsum dolor sit amet consectetur</span>
                </li>
                <li>
                  Thể loại:
                  <span> Lorem ipsum dolor sit amet consectetur</span>
                </li>
                <li>
                  Thời lượng:<span> Lorem ipsum</span>{" "}
                </li>
                <li>
                  Ngôn ngữ:
                  <span> Lorem ipsum dolor sit amet consectetur</span>
                </li>
                <li>
                  Rated: <span>Lorem ipsum dolor sit amet consectetur</span>
                </li>
              </ul>
            </div>
            {/* {data?.sapChieu !== true && (
            <button className="btn" onClick={onClickMuaVeBtn}>
              Mua Vé
            </button>
          )} */}
          </div>
        </div>
        <div className="movie-description">
          <h3 className="title">Nội dung phim</h3>
          <p className="content">{renderNoiDungPhim()}</p>
        </div>
      </div>
    </div>
  );
}
