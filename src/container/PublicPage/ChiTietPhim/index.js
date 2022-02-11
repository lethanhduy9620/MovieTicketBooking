import React, { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from "react-redux";
import { actFetchChiTietPhim } from './modules/actions';
import LichChieu from '../LichChieu';
import { actFetchLichChieuPhim } from '../LichChieu/modules/actions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ChiTietPhim(props) {
    const loading = useSelector((state) => state.chiTietPhimReducer.loading);
    const data = useSelector((state) => state.chiTietPhimReducer.data);
    const dispatch = useDispatch();
    const { id } = props.match.params;

    //DOM Lich Chieu Container
    const lichChieuEvent = useRef(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(actFetchChiTietPhim(id))
    }, []);

    const onClickMuaVeBtn = () => {
        lichChieuEvent.current.classList.remove('hidden');
        dispatch(actFetchLichChieuPhim(id));
    }

    const renderNgayChieuPhim = () => {
        let ngayKhoiChieu = "Lorem ipsum";
        if (data?.ngayKhoiChieu) {
            ngayKhoiChieu = new Date(Date.parse(data.ngayKhoiChieu));
            ngayKhoiChieu = `${ngayKhoiChieu.getDate()}/${ngayKhoiChieu.getMonth() + 1
                }/${ngayKhoiChieu.getFullYear()}`;
        }
        return ngayKhoiChieu
    }

    const renderNoiDungPhim = () => {
        let noiDung = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla saepe beatae qui";
        if (data?.moTa) {
            noiDung = data?.moTa.replace("<p>", "").replace("</p>", "");
        }
        return noiDung;
    }

    if (loading) return <Loader />
    return (
        <>
            <div className="page-single page-single-cyber" >
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img movie-img-cyber">
                                {/* Làm thêm hiệu ứng click vào hình sẽ mở ra khung chiếu trailẻ với đường dẫn được lấy từ youtube */}
                                <img src={data?.hinhAnh} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content text-white">
                                <h1 className="bd-hd">{data?.tenPhim}</h1>
                                <ul>
                                    <li> Đánh giá: <span >{data?.danhGia}</span>
                                    </li>
                                    <li> Ngày khởi chiếu: <span>{renderNgayChieuPhim()}</span>
                                    </li>
                                    <li> Đạo diễn:<span> Lorem, ipsum</span>
                                    </li>
                                    <li> Diễn viên:<span> Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li> Thể loại:<span> Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li> Thời lượng:<span> Lorem ipsum</span> </li>
                                    <li> Ngôn ngữ:<span> Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li> Rated: <span> Lorem ipsum dolor sit amet consectetur</span> </li>
                                </ul>
                                {data?.sapChieu !== true && <button className='btn btn-success btn-cyber' onClick={onClickMuaVeBtn}>Mua Vé</button>}
                            </div>
                        </div>
                    </div>
                    <div className="movie-description-cyber text-white">
                        <h3 className='title-cyber'>Nội dung phim</h3>
                        <p class="describe-cyber">
                            {renderNoiDungPhim()}
                        </p>
                    </div>
                </div>
            </div>
            <LichChieu ref={lichChieuEvent} props={props} />
        </>
    );
}
