import React, { useEffect, useRef } from 'react';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from "react-redux";
import { actFetchChiTietPhim } from './modules/actions';
import LichChieu from '../LichChieu';
import { actFetchLichChieuPhim } from '../LichChieu/modules/actions';


export default function ChiTietPhim(props) {
    const loading = useSelector((state) => state.chiTietPhimReducer.loading);
    const data = useSelector((state) => state.chiTietPhimReducer.data);
    const dispatch = useDispatch();
    const { id } = props.match.params;

    console.log(data);

    //DOM Lich Chieu Container
    const lichChieuEvent = useRef(null);

    useEffect(() => {
        dispatch(actFetchChiTietPhim(id))
    }, []);

    const onClickMuaVeBtn = () => {
        lichChieuEvent.current.classList.remove('hidden');
        dispatch(actFetchLichChieuPhim(id));
    }

    if (loading) return <Loader />

    return (
        <>
            <div className="page-single" >
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
                                    <li>Đánh giá: <span>{data?.danhGia}</span>
                                    </li>
                                    <li>Ngày khởi chiếu: <span>{data?.ngayKhoiChieu}</span>
                                    </li>
                                    <li>Đạo diễn:<span>Lorem, ipsum</span>
                                    </li>
                                    <li>Diễn viên:<span>Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li>Thể loại:<span>Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li>Thời lượng:<span>Lorem ipsum</span> </li>
                                    <li>Ngôn ngữ:<span>Lorem ipsum dolor sit amet consectetur</span> </li>
                                    <li>Rated: <span>Lorem ipsum dolor sit amet consectetur</span> </li>
                                </ul>
                                {data?.sapChieu !== true && <button className='btn btn-success' onClick={onClickMuaVeBtn}>Mua Vé</button>}
                            </div>
                        </div>
                    </div>
                    <div className="movie-description-cyber text-white">
                        <h3>Nội dung phim</h3>
                        {/* Loại bỏ thẻ p khỏ nội dung phim */}
                        <p>
                            {data?.moTa}
                        </p>
                    </div>
                </div>
            </div>
            <LichChieu ref={lichChieuEvent} />
        </>
    );
}
