import React from 'react';
import CarouselComp from './_component/Carousel';
import DanhSachPhimComp from './_component/DanhSachPhim';
import { Container } from '@mui/material';

export default function TrangHome() {
    return (
        <main>
            <CarouselComp />
            <DanhSachPhimComp />
            <section style={{ backgroundColor: '#06121e' }}>
                <Container maxWidth='lg' sx={{ py: 5 }}>
                    <h2 style={{
                        fontFamily: '"Dosis", sans-serif',
                        fontSize: '24px',
                        fontWeight: 500,
                        color: '#fff',
                    }}>#KHUYẾN MÃI</h2>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-3 my-5'>
                            <img className='img-fluid' src='./images/KM-01.jpg' alt='' />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-5'>
                            <img className='img-fluid' src='./images/KM-02.jpg' alt='' />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-5'>
                            <img className='img-fluid' src='./images/KM-03.jpg' alt='' />
                        </div>
                        <div className='col-12 col-md-6 col-lg-3 my-5'>
                            <img className='img-fluid' src='./images/KM-04.jpg' alt='' />
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
