import React, { Fragment } from 'react';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from './_components/customer-list-results';
import { CustomerListToolbar } from './_components/customer-list-toolbar';
import { customers } from '../__mocks__/customers';

export default function Customers() {
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
                        <CustomerListResults customers={customers} />
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
