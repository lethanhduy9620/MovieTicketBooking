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
});

export default rootReducer;