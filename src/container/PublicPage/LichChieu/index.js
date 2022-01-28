import React, { forwardRef, useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import CardsRapChieu from './_components/CardsRapChieu';
import Loader from '../components/Loader';
import { minHeight } from '@mui/system';


//Ẩn cửa số lịch chiếu
const hideLichChieu = (lichChieuEvent) => {
    lichChieuEvent.current.classList.add('hidden');
};

//So sánh giữa 2 ngày
const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth();
}

//Hàm render danh sách các option 
const renderHeThongRapOptions = (dataLichChieu) => {
    return (
        <>
            <option value={'Tất cả hệ thống'}>Tất cả hệ thống</option>
            {dataLichChieu.map((heThong) => { return <option key={heThong.maHeThongRap} value={heThong.maHeThongRap}>{heThong.tenHeThongRap}</option> })}
        </>
    );
};

const renderTenCumRapOptions = (dataLichChieu, optionState) => {
    return (
        <>
            <option value={'Tất cả rạp'}>Tất cả rạp</option>
            {
                dataLichChieu.map((heThongRap) => {
                    return heThongRap.cumRapChieu.map((rapChieu) => {
                        if (optionState.heThongRap === 'Tất cả hệ thống' || heThongRap.maHeThongRap === optionState.heThongRap) {
                            return <option key={rapChieu.maCumRap} value={rapChieu.maCumRap}>{rapChieu.tenCumRap}</option>
                        }
                    })
                })
            }
        </>
    );
};

const filterLichChieu = (dataLichChieu, optionState) => {
    let dsLichChieuCacRap = [];
    dataLichChieu.map((heThongRap) => {
        if (optionState.heThongRap === 'Tất cả hệ thống' || optionState.heThongRap === heThongRap.maHeThongRap) {
            heThongRap.cumRapChieu.map((rapChieu) => {
                let lichChieu1Rap = {};
                if (optionState.maCumRap === 'Tất cả rạp' || optionState.maCumRap === rapChieu.maCumRap) {
                    lichChieu1Rap.logo = heThongRap.logo;
                    lichChieu1Rap.tenCumRap = rapChieu.tenCumRap;
                    lichChieu1Rap.lichChieu = [];
                    rapChieu.lichChieuPhim.map((lichChieu) => {
                        let ngayChieuGioChieu = Date.parse(lichChieu.ngayChieuGioChieu);
                        ngayChieuGioChieu = new Date(ngayChieuGioChieu);
                        if (isSameDay(optionState.ngayChieu, ngayChieuGioChieu)) {
                            let gioChieu = ngayChieuGioChieu.getHours() + ":" + ngayChieuGioChieu.getMinutes();
                            return lichChieu1Rap.lichChieu.push(gioChieu);
                        }
                    })
                }
                if (lichChieu1Rap.lichChieu?.length > 0) return dsLichChieuCacRap.push(lichChieu1Rap);
            });
        }
    });

    return <CardsRapChieu dsLichChieuCacRap={dsLichChieuCacRap} />
};

const LichChieu = forwardRef(({ }, lichChieuEvent) => {
    const loading = useSelector((state) => state.lichChieuPhimReducer.loading);
    const data = useSelector((state) => state.lichChieuPhimReducer.data);
    //Date Time Picker useState
    const [startDate, setStartDate] = useState(new Date('January 1, 2019 00:00:00'));

    const [optionState, setOptionState] = useState({
        viTri: "Tất cả",
        heThongRap: "Tất cả hệ thống",
        maCumRap: "Tất cả rạp",
        ngayChieu: startDate,
    });

    useEffect(() => {
        setOptionState({
            ...optionState, ngayChieu: startDate,
        })
    }, [startDate]);

    const onChangeSelect = (event) => {
        const { name, value } = event.target;
        setOptionState({
            ...optionState,
            [name]: value,
        });
    };

    return (
        <div className='lich-chieu-cyber hidden' ref={lichChieuEvent}>
            <div className='lich-chieu-content'>
                Lich chieu
                <div className='navbar-lich-chieu row m-0'>

                    {/* Selectbox vi tri (API không trả về nên bỏ qua) */}
                    <div className='selex-box-container col-3'>
                        <select value={optionState.viTri} name='viTri' className="form-control shadow-none" onChange={onChangeSelect}>
                            <option value={'Tất cả'}>Vị trí</option>
                            <option value={'TPHCM'}>Hồ Chí Minh</option>
                            <option value={'HN'}>Hà Nội</option>
                        </select>
                    </div>

                    {/* DateTime Picker */}
                    <div className='col-3'>
                        <DatePicker name='ngayChieu' selected={startDate} onChange={(date, event) => { setStartDate(date); onChangeSelect(event) }} />
                    </div>

                    {/* SelectBox he thong rap */}
                    <div className='selex-box-container col-3'>
                        <select value={optionState.heThongRap} name='heThongRap' className="form-control shadow-none" onChange={onChangeSelect}>
                            {data?.heThongRapChieu && renderHeThongRapOptions(data.heThongRapChieu, 'Tất cả hệ thống')}
                        </select>
                    </div>

                    {/* SelectBox rap phim */}
                    <div className='selex-box-container col-3'>
                        <select value={optionState.maCumRap} name='maCumRap' className="form-control shadow-none" onChange={onChangeSelect}>
                            {data?.heThongRapChieu && renderTenCumRapOptions(data.heThongRapChieu, optionState)}
                        </select>
                    </div>
                </div>

                <div className='lich-chieu-chi-tiet'>
                    {data?.heThongRapChieu && filterLichChieu(data.heThongRapChieu, optionState)}
                </div>
            </div>
            <div className='lich-chieu-overlay' onClick={() => { hideLichChieu(lichChieuEvent) }}>
            </div>
        </div >
    );
});

export default LichChieu;

