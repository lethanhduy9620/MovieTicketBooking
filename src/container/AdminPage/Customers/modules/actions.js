import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDSNguoiDung = () => {
    return (dispatch) => {
        //
        dispatch(actRequestDSNguoiDung());

        //call api to server
        api.get('QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP05&soTrang=1&soPhanTuTrenTrang=10')
            .then((result) => {
                // console.log(result.data.content);
                dispatch(actRequestDSNguoiDungSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actRequestDSNguoiDungFail(error.message));
            });
    };
};

export const actPostThongTinNguoiDung = () => {
    return (dispatch) => {
        //
        dispatch(actRequestDSNguoiDung());


        // 9/2/2022 - Đang làm đến đây
        //call api to server
        // api.get('QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP05&soTrang=1&soPhanTuTrenTrang=10')
        //     .then((result) => {
        //         // console.log(result.data.content);
        //         dispatch(actRequestDSNguoiDungSuccess(result.data.content));
        //     })
        //     .catch((error) => {
        //         dispatch(actRequestDSNguoiDungFail(error.message));
        //     });
    };
}

const actRequestDSNguoiDung = () => {
    return {
        type: ActionType.REQUEST_API_NGUOI_DUNG,
    };
};

const actRequestDSNguoiDungSuccess = (data) => {
    return {
        type: ActionType.REQUEST_DS_NGUOI_DUNG_SUCCESS,
        payload: data,
    };
};

const actRequestDSNguoiDungFail = (error) => {
    return {
        type: ActionType.REQUEST_DS_NGUOI_DUNG_FAIL,
        payload: error,
    };
};
