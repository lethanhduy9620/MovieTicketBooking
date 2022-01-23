import React from 'react'

export default function ThePhim(props) {
    const { phim } = props;

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-3">
            <img src={phim.hinhAnh} alt={phim.tenPhim} />
            <div className="hvr-inner">
                <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright" /> </a>
            </div>
            <div className="mv-item-infor">
                <h4><a href="#">{phim.tenPhim}</a></h4>
            </div>
        </div>
    )
}
