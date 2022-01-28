import React from 'react';


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
                        {item.lichChieu.map((gioChieu, index) => {
                            return (
                                <li key={index}>
                                    <button className="btn btn-success shadow-none">{gioChieu}</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    })
}
