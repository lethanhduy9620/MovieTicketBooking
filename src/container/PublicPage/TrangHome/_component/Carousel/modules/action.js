import * as ActionType from './constants';
import api from '../../../../../../utils/apiUtils';

const actBannerFetchData = () => {
    return (dispatch) => {
        dispatch(actBannerRequest());

        api
            .get('QuanLyPhim/LayDanhSachBanner')
            .then(result => {
                dispatch(actBannerSuccess(result.data));
            })
            .catch(err => {
                dispatch(actBannerFailed(err));
            })
    }
}

const actBannerRequest = () => {
    return ({
        type: ActionType.BANNER_REQUEST,
    })
}

const actBannerSuccess = (data) => {
    return ({
        type: ActionType.BANNER_SUCCESS,
        payload: data,
    })
}

const actBannerFailed = (err) => {
    return ({
        type: ActionType.BANNER_SUCCESS,
        payload: err,
    })
}

export default actBannerFetchData;
