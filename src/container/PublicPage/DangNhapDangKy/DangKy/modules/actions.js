import * as ActionType from './constants';
import api from '../../../../../utils/apiUtils';

export const actDangKy = (userInput, history) => {
    return (dispatch) => {
        //Request Dang Ky
        dispatch(actResquestDangKy());

        //Gọi API
        api
            .post("QuanLyNguoiDung/DangKy", userInput)
            .then((result) => {
                dispatch(actResquestDangKySuccess(result.data.content));

                //Chuyển hướng đến trang đăng nhập
                history.push('/dang-nhap');
            })
            .catch((error) => {
                dispatch(actResquestDangKyFail(error));
            })

    }
};

const actResquestDangKy = () => {
    return {
        type: ActionType.RESQUEST_DANG_KY,
    };
};

const actResquestDangKySuccess = (data) => {
    return {
        type: ActionType.RESQUEST_DANG_KY_SUCCESS,
        payload: data,
    };
};

const actResquestDangKyFail = (error) => {
    return {
        type: ActionType.RESQUEST_DANG_KY_FAIL,
        payload: error,
    };
};