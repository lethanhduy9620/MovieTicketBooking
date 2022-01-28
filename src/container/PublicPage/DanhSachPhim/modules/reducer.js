import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    error: null,
    dsPhimDangChieu: null,
    dsPhimSapChieu: null,
};

const locDSPhimDangChieu = (data) => {
    return data.filter(phim => phim.dangChieu === true);
}

const locDSPhimSapChieu = (data) => {
    return data.filter(phim => phim.sapChieu === true);
}



const dsPhimDangChieuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU:
            state.loading = true;
            state.data = null;
            state.error = null;
            state.dsPhimDangChieu = null;
            state.dsPhimSapChieu = null;
            return { ...state };
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            state.dsPhimDangChieu = locDSPhimDangChieu(state.data);
            state.dsPhimSapChieu = locDSPhimSapChieu(state.data);
            return { ...state };
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            state.dsPhimDangChieu = null;
            state.dsPhimSapChieu = null;
            return { ...state };
        default:
            return { ...state };
    };
};

export default dsPhimDangChieuReducer;