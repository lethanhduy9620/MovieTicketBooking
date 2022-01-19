import React, { useEffect } from 'react';
import HeaderPhimDangChieu from './_component/HeaderPhimDangChieu';
import { actFetchDSPhimDangChieu } from './modules/actions';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader';
import ThePhim from './_component/ThePhim';


export default function PhimDangChieu() {
    const loading = useSelector((state) => state.dsPhimDangChieuReducer.loading);
    const data = useSelector((state) => state.dsPhimDangChieuReducer.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchDSPhimDangChieu());
    }, [])

    const renderDSPhimDangChieu = () => {
        return data?.map((phim) => {
            return <ThePhim
                key={phim.maPhim}
                phim={phim}
            />
        })
    }

    if (loading) return <Loader />

    return (
        <>
            <HeaderPhimDangChieu />
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="flex-wrap-movielist">
                                {renderDSPhimDangChieu()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
