import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    error: null,
};

const dsPhimDangChieuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.REQUEST_DS_PHIM_DANG_CHIEU_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };
    };
};

export default dsPhimDangChieuReducer;