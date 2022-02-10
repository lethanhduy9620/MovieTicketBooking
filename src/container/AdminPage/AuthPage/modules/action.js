// import axios from "axios";
import * as ActionType from './constant';
import api from '../../../../utils/apiUtils';


export const actAuth = (loginInfo, history) => {
    return (dispatch) => {
        dispatch(actAuthRequest(loginInfo));

        // axios({
        //     url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
        //     method: 'POST',
        //     data: loginInfo,
        // })
        api
            .post('QuanLyNguoiDung/DangNhap', loginInfo)
            .then(result => {
                // check maLoaiNguoiDung
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: 'Bạn không có quyền truy cập trang web này',
                            }
                        }
                    });
                }
                // lưu thông tin xuống localStorage
                localStorage.setItem("UserAdmin", JSON.stringify(result.data));
                // redirect qua trang Dashboard
                history.replace('/dashboard');
                dispatch(actAuthSuccess(result.data));
            })
            .catch(error => { dispatch(actAuthFailed(error)) })
    }
}

const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data
    };
};

const actAuthFailed = (err) => {
    return {
        type: ActionType.AUTH_FAILED,
        payload: err
    };
};