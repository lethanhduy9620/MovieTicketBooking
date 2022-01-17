import React from 'react';
import HeaderPhimDangChieu from './_component/HeaderPhimDangChieu';

export default function TrangDanhSachPhim() {
    return (
        <>
            <HeaderPhimDangChieu />
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="flex-wrap-movielist">
                                <div className="movie-item-style-2 movie-item-style-1">
                                    {/* <img src="images/uploads/mv1.jpg" alt /> */}
                                    <div className="hvr-inner">
                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright" /> </a>
                                    </div>
                                    <div className="mv-item-infor">
                                        <h6><a href="#">oblivion</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
