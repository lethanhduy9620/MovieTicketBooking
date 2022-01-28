import { combineReducers } from "redux";
import dsPhimDangChieuReducer from "../container/PublicPage/DanhSachPhim/modules/reducer";
import chiTietPhimReducer from "../container/PublicPage/ChiTietPhim/modules/reducer";
import lichChieuPhimReducer from "../container/PublicPage/LichChieu/modules/reducer";
import dangNhapReducer from "../container/PublicPage/DangNhapDangKy/DangNhap/modules/reducer";
import dangKyReducer from "../container/PublicPage/DangNhapDangKy/DangKy/modules/reducer";

const rootReducer = combineReducers({
    dsPhimDangChieuReducer,
    chiTietPhimReducer,
    lichChieuPhimReducer,
    dangNhapReducer,
    dangKyReducer,
});

export default rootReducer;