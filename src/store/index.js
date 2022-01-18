import { combineReducers } from "redux";
import dsPhimDangChieuReducer from "../container/PublicPage/PhimDangChieu/modules/reducer";

const rootReducer = combineReducers({
    dsPhimDangChieuReducer,
});

export default rootReducer;