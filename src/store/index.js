import { combineReducers } from "redux";
import dsPhimDangChieuReducer from "../container/PublicPage/PhimDangChieu/modules/reducer";
import bannerReducer from "../container/PublicPage/TrangHome/_component/Carousel/modules/reducer";
import homePhimDangChieuReducer from "../container/PublicPage/TrangHome/_component/DanhSachPhim/modules/reducer";

const rootReducer = combineReducers({
    bannerReducer,
    homePhimDangChieuReducer,
    dsPhimDangChieuReducer,
});

export default rootReducer;