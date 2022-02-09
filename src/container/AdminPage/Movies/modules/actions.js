import * as ActionType from './constants';
import api from '../../../../utils/apiUtils';

const actGetMovieData = (dispatch) => {
    return (dispatch) => {
        dispatch(actMovieRequest());

        api
            .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP05')
            .then(result => dispatch(actMovieSuccess(result.data)))
            .catch(error => dispatch(actMovieFailed(error)))
    }
}

const actMovieRequest = () => {
    return ({
        type: ActionType.MOVIE_REQUEST,
    });
};

const actMovieSuccess = (data) => {
    return ({
        type: ActionType.MOVIE_SUCCESS,
        payload: data,
    });
};

const actMovieFailed = (error) => {
    return ({
        type: ActionType.MOVIE_FAILED,
        payload: error,
    });
};

export { actGetMovieData };
