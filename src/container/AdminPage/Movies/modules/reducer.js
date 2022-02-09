import * as ActionType from './constants';

const initialState = {
    loading: false,
    movieData: null,
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.MOVIE_REQUEST: {
            const newState = { ...state, loading: true };
            state = newState;
            return { ...state };
        }

        case ActionType.MOVIE_SUCCESS: {
            const newState = { ...state, loading: false, movieData: action.payload };
            state = newState;
            return { ...state };
        }

        case ActionType.MOVIE_FAILED: {
            const newState = { ...state, loading: false, error: action.payload };
            state = newState;
            return { ...state };
        }

        default:
            return state;
    }
};

export default movieReducer;

