import * as ActionType from './constants';

const initialState = {
    loading: false,
    showtimeData: null,
    error: null,
};

const showtimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOWTIME_REQUEST: {
            const stateNew = { ...state, loading: true };
            state = stateNew;
            return { ...state };
        }
        case ActionType.SHOWTIME_SUCCESS: {
            const stateNew = { ...state, loading: false, showtimeData: action.payload };
            state = stateNew;
            return { ...state };
        }
        case ActionType.SHOWTIME_FAILED: {
            const stateNew = { ...state, loading: false, error: action.payload };
            state = stateNew;
            return { ...state };
        }
        default:
            return state;
    }
};

export default showtimeReducer;