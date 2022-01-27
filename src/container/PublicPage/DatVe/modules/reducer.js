import * as ActionType from './constants';

const initialState = {
    loading: false,
    dataPhongVe: null,
    error: null,
    danhSachGheChon: []
};

const datVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.PHONG_VE_REQUEST: {
            const stateNew = { ...state, loading: true };
            state = stateNew;
            return { ...state };
        }

        case ActionType.PHONG_VE_SUCCESS: {
            const stateNew = { ...state, loading: false, dataPhongVe: action.payload };
            state = stateNew;
            return { ...state };
        }

        case ActionType.PHONG_VE_FAILED: {
            const stateNew = { ...state, loading: false, error: action.payload };
            state = stateNew;
            return { ...state };
        }
        case ActionType.CHON_GHE: {
            const danhSachGheChon = [...state.danhSachGheChon];
            const gheChon = action.payload;
            const index = danhSachGheChon.findIndex(ghe => ghe.tenGhe === gheChon.tenGhe);
            if (index !== -1) {
                danhSachGheChon.splice(index, 1);
            } else {
                danhSachGheChon.push(gheChon);
            }
            const stateNew = { ...state, danhSachGheChon };
            state = stateNew;
            return { ...state };
        }

        default:
            return state;
    }
};

export default datVeReducer;
