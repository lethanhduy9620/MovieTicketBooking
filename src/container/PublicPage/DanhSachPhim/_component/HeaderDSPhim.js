import React from 'react';

export default function HeaderDSPhim(props) {
    let tenTrang = null;
    props.url === '/phim-dang-chieu' ? tenTrang = 'PHIM ĐANG CHIẾU' : tenTrang = 'PHIM SẮP CHIẾU';

    return (
        <div className="hero common-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1>{tenTrang}</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="#">Home</a></li>
                                <li><span>{'>'}</span>{tenTrang}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
