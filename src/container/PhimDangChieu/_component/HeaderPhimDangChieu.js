import React from 'react';

export default function HeaderPhimDangChieu() {
    return (
        <div className="hero common-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1>PHIM ĐANG CHIẾU</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="#">Home</a></li>
                                <li> <span className="ion-ios-arrow-right" />Phim đang chiếu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
