import React, { useEffect, useState } from 'react';
import HeaderDSPhim from './_component/HeaderDSPhim';
import { actFetchDSPhimDangChieu } from './modules/actions';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader';
import ThePhim from './_component/ThePhim';


export default function DanhSachPhim(props) {
    const loading = useSelector((state) => state.dsPhimDangChieuReducer.loading);
    const dsPhimDangChieu = useSelector((state) => state.dsPhimDangChieuReducer.dsPhimDangChieu);
    const dsPhimSapChieu = useSelector((state) => state.dsPhimDangChieuReducer.dsPhimSapChieu);
    const dispatch = useDispatch();
    const url = props.match.url;

    useEffect(() => {
        dispatch(actFetchDSPhimDangChieu());
    }, []);

    const renderDSPhim = (data) => {
        return data?.map((phim) => {
            return <ThePhim
                key={phim.maPhim}
                phim={phim}
            />
        })
    };

    if (loading) return <Loader />

    return (
        <>
            <HeaderDSPhim url={url} />
            <div className="page-single page-single-cyber">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="flex-wrap-movielist">
                                {url === '/phim-dang-chieu' ? renderDSPhim(dsPhimDangChieu) : renderDSPhim(dsPhimSapChieu)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
