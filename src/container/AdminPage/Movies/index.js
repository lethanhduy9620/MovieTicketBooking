import React, { Fragment, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { MovieListToolbar } from './_components/movie-list-toolbar';
import { MovieListResults } from './_components/movie-list-results';
import { actGetMovieData } from './modules/actions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../PublicPage/components/Loader';

export default function Movies() {
    const loading = useSelector(state => state.movieReducer.loading);
    const movieData = useSelector(state => state.movieReducer.movieData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actGetMovieData());
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
                    <MovieListToolbar />
                    <Box sx={{ mt: 3 }}>
                        <MovieListResults movieData={movieData} />
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
