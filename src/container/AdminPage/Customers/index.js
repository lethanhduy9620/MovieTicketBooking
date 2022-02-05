import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from './_components/customer-list-results';
import { CustomerListToolbar } from './_components/customer-list-toolbar';
import { actCustomerDataGet } from './modules/actions';
import Loader from '../../PublicPage/components/Loader';

export default function Customers() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useRef');
        dispatch(actCustomerDataGet());
    }, []);

    const loading = useSelector(state => state.customerReducer.loading);
    const customerData = useSelector(state => state.customerReducer.customerData);

    if (loading) return <Loader></Loader>
    return (
        <Fragment>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: '25px',
                    bgcolor: '#F9FAFC',
                }}
            >
                <Container maxWidth={false}>
                    <CustomerListToolbar />
                    <Box sx={{ mt: 3 }}>
                        <CustomerListResults customerData={customerData} />
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
