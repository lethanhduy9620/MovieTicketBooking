import * as ActionType from './constants';

const initialState = {
    loading: false,
    dataBanner: null,
    error: null,
};

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BANNER_REQUEST: {
            let stateNew = { ...state, loading: true }
            state = stateNew;
            return { ...state };
        }

        case ActionType.BANNER_SUCCESS: {
            let stateNew = { ...state, loading: false, dataBanner: action.payload }
            state = stateNew;
            return { ...state };
        }

        case ActionType.BANNER_FAILED: {
            let stateNew = { ...state, loading: false, error: action.payload }
            state = stateNew;
            return { ...state };
        }

        default:
            return { ...state };
    }
};

export default bannerReducer;
