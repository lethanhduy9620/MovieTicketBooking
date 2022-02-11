import React from 'react';
import { Link } from 'react-router-dom';

export default function CardsRapChieu(props) {

    const { dsLichChieuCacRap } = props;
    return dsLichChieuCacRap.map((item, index) => {
        return (
            <div className='box-chi-tiet' key={index}>
                <div className='chi-tiet-header'>
                    <img src={item.logo} />
                    <span>{item.tenCumRap}</span>
                </div>
                <div className='chi-tiet-content'>
                    <ul>
                        {item.lichChieu.map((suatChieu, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        className="btn btn-warning shadow-none"
                                        to={`/dat-ve/${suatChieu.maLichChieu}`}
                                    >{suatChieu.gioChieu}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    })
}
