import React, { Fragment } from 'react';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ProductListToolbar } from './_components/product-list-toolbar';

export default function Movies() {
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
                    <ProductListToolbar />
                    <Box sx={{ pt: 3 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pt: 3
                        }}
                    >
                        <Pagination
                            color="primary"
                            count={3}
                            size="small"
                        />
                    </Box>
                </Container>
            </Box>
        </Fragment>
    )
}
