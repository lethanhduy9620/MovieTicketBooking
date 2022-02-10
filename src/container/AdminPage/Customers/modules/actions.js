import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

export const actCustomerDataGet = () => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());

        api
            .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05')
            .then(result => dispatch(actCustomerDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)))
    }
}

const actCustomerDataRequest = () => {
    return ({
        type: ActionType.CUSTOMER_REQUEST,
    });
};

const actCustomerDataSuccess = (data) => {
    return ({
        type: ActionType.CUSTOMER_SUCCESS,
        payload: data,
    });
};

const actCustomerDataFailed = (error) => {
    return ({
        type: ActionType.CUSTOMER_FAILED,
        payload: error,
    });
};
