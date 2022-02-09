import React, { Fragment, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { ShowtimeListToolbar } from './_components/showtime-list-toolbar';
import { ShowtimeListResults } from './_components/showtime-list-results';
import { useDispatch, useSelector } from 'react-redux';
import { actGetShowtimeData } from './modules/actions';
import Loader from '../../../../container/PublicPage/components/Loader';

export default function MovieShowtime(props) {
    const loading = useSelector(state => state.showtimeReducer.loading);
    const showtimeData = useSelector(state => state.showtimeReducer.showtimeData);

    const dispatch = useDispatch();

    useEffect(() => {
        const { maPhim } = props.match.params;
        dispatch(actGetShowtimeData(maPhim));
    }, [])
    if (loading) return <Loader></Loader>
    return (
        <Fragment>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: '25px'
                }}
            >
                <Container maxWidth={false}>
                    <ShowtimeListToolbar />
                    <Box sx={{ mt: 3 }}>
                        <ShowtimeListResults showtimeData={showtimeData} />
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
