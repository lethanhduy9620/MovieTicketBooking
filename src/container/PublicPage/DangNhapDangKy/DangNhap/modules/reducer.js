import * as ActionType from './constants';

let initialState = {
    loading: false,
    data: null,
    error: null,
};

const dangNhapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.RESQUEST_DANG_NHAP:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.RESQUEST_DANG_NHAP_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.RESQUEST_DANG_NHAP_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default dangNhapReducer;
