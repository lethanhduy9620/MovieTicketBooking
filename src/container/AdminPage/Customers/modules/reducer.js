import * as ActionType from './constants';

const initialState = {
    loading: false,
    customerDataGet: null,
    customerDataAdd: null,
    customerDataEdit: null,
    customerDataDelete: null,
    error: null,
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CUSTOMER_REQUEST: {
            const stateNew = {
                ...state, loading: true,
            }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_SUCCESS: {
            const stateNew = { ...state, loading: false, customerDataGet: action.payload, customerDataAdd: null }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_ADD_SUCCESS: {
            const stateNew = { ...state, loading: false, customerDataAdd: action.payload }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_EDIT_SUCCESS: {
            const stateNew = { ...state, loading: false, customerDataEdit: action.payload }
            state = stateNew;
            return { ...state };
        }

        case ActionType.CUSTOMER_DELETE_SUCCESS: {
            const stateNew = { ...state, loading: false, customerDataDelete: action.payload }
            state = stateNew;
            console.log(stateNew);
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
