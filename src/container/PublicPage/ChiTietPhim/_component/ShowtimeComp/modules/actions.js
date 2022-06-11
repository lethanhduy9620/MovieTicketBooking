import * as ActionType from "./constants";
import api from "../../../../../../utils/apiUtils.js";

export const actFetchLichChieuPhim = (id) => {
  return (dispatch) => {
    //Request Danh sách phim đang chiếu
    dispatch(actRequestLichChieuPhim());

    //call api to server
    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actRequestLichChieuPhimSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actRequestLichChieuPhimFail(error.message));
      });
  };
};

const actRequestLichChieuPhim = () => {
  return {
    type: ActionType.REQUEST_LICH_CHIEU_PHIM,
  };
};

const actRequestLichChieuPhimSuccess = (data) => {
  return {
    type: ActionType.REQUEST_LICH_CHIEU_PHIM_SUCCESS,
    payload: data,
  };
};

const actRequestLichChieuPhimFail = (error) => {
  return {
    type: ActionType.REQUEST_LICH_CHIEU_PHIM_FAIL,
    payload: error,
  };
};

export const actSelectNgayChieuPhim = (fullDate) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SELECT_NGAY_CHIEU_PHIM,
      payload: fullDate,
    });
  };
};

export const actSelectHeThongRap = (heThongRap) => {
  return (dispatch) => {
    dispatch({
      type: ActionType.SELECT_HE_THONG_RAP,
      payload: heThongRap,
    });
  };
};
