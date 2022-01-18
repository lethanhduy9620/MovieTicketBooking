import React from 'react'

export default function ThePhim(props) {
    const { phim } = props;

    return (
        <div className="movie-item-style-2 movie-item-style-1">
            <img src={phim.hinhAnh} alt={phim.tenPhim} />
            <div className="hvr-inner">
                <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright" /> </a>
            </div>
            <div className="mv-item-infor">
                <h6><a href="#">{phim.tenPhim}</a></h6>
            </div>
        </div>
    )
}
