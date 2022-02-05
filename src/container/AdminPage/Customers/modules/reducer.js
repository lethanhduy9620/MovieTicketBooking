import * as ActionType from './constants';

const initialState = {
    loading: false,
    customerData: null,
    error: null
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CUSTOMER_REQUEST: {
            const stateNew = { ...state, loading: true }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_SUCCESS: {
            const stateNew = { ...state, loading: false, customerData: action.payload }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_FAILED: {
            const stateNew = { ...state, loading: false, error: action.payload }
            state = stateNew;
            return { ...state }
        }
        default:
            return state;
    }
};

export default customerReducer;