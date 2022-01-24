import * as ActionType from './constants';
import api from '../../../../../../utils/apiUtils';

const actFetchPhim = () => {
    return (dispatch) => {
        dispatch(actPhimRequest());

        api
            .get('QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=1&soPhanTuTrenTrang=16')
            .then(result => {
                dispatch(actPhimSuccess(result.data));
            })
            .catch(err => {
                dispatch(actPhimFailed(err));
            })
    }
}

const actPhimRequest = () => {
    return ({
        type: ActionType.PHIM_REQUEST,
    });
};

const actPhimSuccess = (data) => {
    return ({
        type: ActionType.PHIM_SUCCESS,
        payload: data
    });
};

const actPhimFailed = (error) => {
    return ({
        type: ActionType.PHIM_FAILED,
        payload: error
    });
};

export default actFetchPhim;
