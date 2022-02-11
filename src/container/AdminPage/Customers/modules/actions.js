import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

export const actCustomerDataGet = () => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());

        api
            .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP05')
            .then(result => dispatch(actCustomerDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)));
    }
};

export const actCustomerDataAdd = (data) => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());

        api
            .post('QuanLyNguoiDung/ThemNguoiDung', data)
            .then(result => dispatch(actCustomerAddDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)));
    }
};

export const actCustomerDataGetTaiKhoan = (taiKhoan) => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());

        api
            .get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP05&tuKhoa=${taiKhoan}`)
            .then(result => dispatch(actCustomerEditDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)));
    }
};

export const actCustomerDataCapNhatTaiKhoan = (data) => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());

        api
            .post('QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
            .then(result => dispatch(actCustomerEditDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)));
    }
};

export const actCustomerDataXoaTaiKhoan = (taiKhoan) => {
    return (dispatch) => {
        dispatch(actCustomerDataRequest());
        // console.log(taiKhoan);

        api
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
            .then(result => dispatch(actCustomerEditDataSuccess(result.data)))
            .catch(error => dispatch(actCustomerDataFailed(error)));
    }
};

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

const actCustomerAddDataSuccess = (data) => {
    return ({
        type: ActionType.CUSTOMER_ADD_SUCCESS,
        payload: data,
    });
};

const actCustomerEditDataSuccess = (data) => {
    return ({
        type: ActionType.CUSTOMER_EDIT_SUCCESS,
        payload: data,
    });
};

const actCustomerDataFailed = (error) => {
    return ({
        type: ActionType.CUSTOMER_FAILED,
        payload: error,
    });
};
