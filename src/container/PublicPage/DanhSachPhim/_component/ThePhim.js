import React from 'react';
import { Link } from 'react-router-dom';

export default function ThePhim(props) {
    const { phim } = props;
    return (
        <div className="movie-item-style-2 movie-item-style-1">
            <img src={phim.hinhAnh} alt={phim.tenPhim} />
            <div className="hvr-inner">
                <Link to={`/chi-tiet-phim/${phim.maPhim}`}> Read more <i className="ion-android-arrow-dropright" /> </Link>
            </div>
            <div className="mv-item-infor">
                <h6><Link to={`/chi-tiet-phim/${phim.maPhim}`}>{phim.tenPhim}</Link></h6>
            </div>
        </div>
    )
}
