import * as ActionType from './constants';
import api from '../../../../../utils/apiUtils';
import { useHistory } from 'react-router-dom';


export const actDangNhap = (userInput, history) => {

    return (dispatch) => {
        //Request Dang Nhap
        dispatch(actResquestDangNhap());

        //Gọi API
        api
            .post("QuanLyNguoiDung/DangNhap", userInput)
            .then((result) => {
                dispatch(actResquestDangNhapSuccess(result.data));

                //Lưu thông tin xuống local storage
                localStorage.setItem("GeneralUser", JSON.stringify(result.data.content));
               
                //Redirect to previous page
                history.goBack();
            })
            .catch((error) => {
                dispatch(actResquestDangNhapFail(error));
            })

    }
};

const actResquestDangNhap = () => {
    return {
        type: ActionType.RESQUEST_DANG_NHAP,
    };
};

const actResquestDangNhapSuccess = (data) => {
    return {
        type: ActionType.RESQUEST_DANG_NHAP_SUCCESS,
        payload: data,
    };
};

const actResquestDangNhapFail = (error) => {
    return {
        type: ActionType.RESQUEST_DANG_NHAP_FAIL,
        payload: error,
    };
};