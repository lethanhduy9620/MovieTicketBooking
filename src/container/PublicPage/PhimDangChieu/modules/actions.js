import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

export const actFetchDSPhimDangChieu = () => {
    return (dispatch) => {
        //Request Danh sách phim đang chiếu
        dispatch(actRequestDSPhimDangChieu());

        //call api to server
        api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
            .then((result) => {
                dispatch(actRequestDSPhimDangChieuSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actRequestDSPhimDangChieuFail(error.message));
            });
    };
};

const actRequestDSPhimDangChieu = () => {
    return {
        type: ActionType.REQUEST_DS_PHIM_DANG_CHIEU,
    };
};

const actRequestDSPhimDangChieuSuccess = (data) => {
    return {
        type: ActionType.REQUEST_DS_PHIM_DANG_CHIEU_SUCCESS,
        payload: data,
    };
};

const actRequestDSPhimDangChieuFail = (error) => {
    return {
        type: ActionType.REQUEST_DS_PHIM_DANG_CHIEU_FAIL,
        payload: error,
    };
};
