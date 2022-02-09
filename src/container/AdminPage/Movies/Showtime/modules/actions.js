import * as ActionType from './constants';
import api from '../../../../../utils/apiUtils';

const actGetShowtimeData = (maPhim) => {
    return (dispatch) => {
        dispatch(actShowtimeDataRequest());

        api
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            .then(result => dispatch(actShowtimeDataSuccess(result.data)))
            .catch(error => dispatch(actShowtimeDataFailed(error)))
    };
};

const actShowtimeDataRequest = () => {
    return ({
        type: ActionType.SHOWTIME_REQUEST,
    });
};

const actShowtimeDataSuccess = (data) => {
    return ({
        type: ActionType.SHOWTIME_SUCCESS,
        payload: data,
    });
};

const actShowtimeDataFailed = (error) => {
    return ({
        type: ActionType.SHOWTIME_FAILED,
        payload: error,
    });
};

export { actGetShowtimeData }