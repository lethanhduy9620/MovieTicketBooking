import * as ActionType from "./constants";
import api from "../../../../../../utils/apiUtils.js";

export const actFetchChiTietPhim = (id) => {
  return (dispatch) => {
    //Request Danh sách phim đang chiếu
    dispatch(actRequestChiTietPhim());

    //call api to server
    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actRequestChiTietPhimSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actRequestChiTietPhimFail(error.message));
      });
  };
};

const actRequestChiTietPhim = () => {
  return {
    type: ActionType.REQUEST_CHI_TIET_PHIM,
  };
};

const actRequestChiTietPhimSuccess = (data) => {
  return {
    type: ActionType.REQUEST_CHI_TIET_PHIM_SUCCESS,
    payload: data,
  };
};

const actRequestChiTietPhimFail = (error) => {
  return {
    type: ActionType.REQUEST_CHI_TIET_PHIM_FAIL,
    payload: error,
  };
};
