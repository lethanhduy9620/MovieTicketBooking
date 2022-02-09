import { combineReducers } from "redux";
import dsPhimDangChieuReducer from "../container/PublicPage/DanhSachPhim/modules/reducer";
import chiTietPhimReducer from "../container/PublicPage/ChiTietPhim/modules/reducer";
import lichChieuPhimReducer from "../container/PublicPage/LichChieu/modules/reducer";
import dangNhapReducer from "../container/PublicPage/DangNhapDangKy/DangNhap/modules/reducer";
import dangKyReducer from "../container/PublicPage/DangNhapDangKy/DangKy/modules/reducer";
import bannerReducer from "../container/PublicPage/TrangHome/_component/Carousel/modules/reducer";
import homePhimDangChieuReducer from "../container/PublicPage/TrangHome/_component/DanhSachPhim/modules/reducer";
import datVeReducer from "../container/PublicPage/DatVe/modules/reducer";
import customerReducer from "../container/AdminPage/Customers/modules/reducer";
import authReducer from "../container/AdminPage/AuthPage/modules/reducer";
import movieReducer from "../container/AdminPage/Movies/modules/reducer";
import showtimeReducer from "../container/AdminPage/Movies/Showtime/modules/reducer";

const rootReducer = combineReducers({
    bannerReducer,
    homePhimDangChieuReducer,
    dsPhimDangChieuReducer,
    chiTietPhimReducer,
    lichChieuPhimReducer,
    dangNhapReducer,
    dangKyReducer,
    datVeReducer,
    customerReducer,
    authReducer,
    movieReducer,
    showtimeReducer
});

export default rootReducer;