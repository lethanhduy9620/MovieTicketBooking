import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

const actPhongVeGetData = (maLichChieu) => {
    return (dispatch) => {
        dispatch(actPhongVeRequest());

        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then(result => {
                dispatch(actPhongVeSuccess(result.data));
            })
            .catch(error => {
                dispatch(actPhongVeFailed(error));
            })
    }
}

const actPhongVeRequest = () => {
    return ({
        type: ActionType.PHONG_VE_REQUEST,
    })
}

const actPhongVeSuccess = (dataPhongVe) => {
    return ({
        type: ActionType.PHONG_VE_SUCCESS,
        payload: dataPhongVe,
    })
}

const actPhongVeFailed = (error) => {
    return ({
        type: ActionType.PHONG_VE_FAILED,
        payload: error,
    })
}

const actChonGhe = (ghe) => {
    return ({
        type: ActionType.CHON_GHE,
        payload: ghe,
    })
}


export { actPhongVeGetData, actChonGhe };
