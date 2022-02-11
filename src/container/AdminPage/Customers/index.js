import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from './_components/customer-list-results';
import { CustomerListToolbar } from './_components/customer-list-toolbar';
import { actCustomerDataGet, actCustomerDataGetTaiKhoan, actCustomerDataCapNhatTaiKhoan } from './modules/actions';
import Loader from '../../PublicPage/components/Loader';
import CustomerModal from './_components/customer-modal';

export default function Customers() {
    const [modalState, setModalOpen] = useState({
        open: false,
        addCustomer: false,
        editCustomer: false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actCustomerDataGet());
    }, []);

    const loading = useSelector(state => state.customerReducer.loading);
    const customerData = useSelector(state => state.customerReducer.customerDataGet);
    const customerDataEdit = useSelector(state => state.customerReducer.customerDataEdit);

    const handleOnEditModalOpen = (taiKhoan) => {
        setModalOpen({
            open: true,
            editCustomer: true,
        });
        dispatch(actCustomerDataGetTaiKhoan(taiKhoan));
    }


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
                    <CustomerListToolbar onAddModalOpen={
                        () => setModalOpen({
                            open: true,
                            addCustomer: true,
                        })
                    } />
                    <Box sx={{ mt: 3 }}>
                        <CustomerListResults customerData={customerData} onEditModalOpen={handleOnEditModalOpen}
                        />
                    </Box>
                </Container>
                <CustomerModal modalState={modalState} customerDataEdit={customerDataEdit} onClose={
                    () => {
                        setModalOpen({
                            open: false,
                            addCustomer: false,
                        })
                    }
                } />
            </Box>
        </Fragment>
    )
}
