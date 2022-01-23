import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Slider from "react-slick";
import './css/slick-style.css';
import actBannerFetchData from './modules/action';
import Loader from '../../../components/Loader';

const carouselStyle = makeStyles({
    carousel: {
        backgroundImage: 'url("./images/uploads/slider-bg.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh'
    },
    image: {
        display: 'block',
        width: '100%',
        height: '70vh',
        objectFit: 'cover'
    }
})

export default function CarouselComp() {
    const carouselClass = carouselStyle();

    const loading = useSelector(state => state.bannerReducer.loading);
    const dataBanner = useSelector(state => state.bannerReducer.dataBanner);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actBannerFetchData());
    }, [])

    const renderBanner = () => {
        return dataBanner?.content.map((banner, index) => {
            return (
                <div key={index}>
                    <img className={carouselClass.image} src={banner.hinhAnh} alt='' />
                </div>
            )
        })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    if (loading) return <Loader />
    return (
        <section className={carouselClass.carousel}>
            <Container maxWidth="lg" sx={{ py: 15 }}>
                <Slider {...settings}>
                    {renderBanner()}
                </Slider>
            </Container>
        </section>
    )
}
