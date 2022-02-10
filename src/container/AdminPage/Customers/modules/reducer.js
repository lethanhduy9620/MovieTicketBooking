import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    error: null,
};

const dsNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REQUEST_API_NGUOI_DUNG:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.REQUEST_DS_NGUOI_DUNG_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.REQUEST_DS_NGUOI_DUNG_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };
    };
};

export default dsNguoiDungReducer;