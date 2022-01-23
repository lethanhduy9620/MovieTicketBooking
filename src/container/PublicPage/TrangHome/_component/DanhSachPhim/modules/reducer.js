import * as ActionType from './constants';

const initialState = {
    loading: false,
    dataPhim: null,
    error: null
};

const homePhimDangChieuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PHIM_REQUEST: {
            let stateNew = { ...state, loading: true };
            state = stateNew;
            return { ...state };
        }

        case ActionType.PHIM_SUCCESS: {
            let stateNew = { ...state, loading: false, dataPhim: action.payload };
            state = stateNew;
            return { ...state };
        }

        case ActionType.PHIM_FAILED: {
            let stateNew = { ...state, loading: false, dataPhim: action.payload };
            state = stateNew;
            return { ...state };
        }

        default:
            return state;
    }
};

export default homePhimDangChieuReducer;