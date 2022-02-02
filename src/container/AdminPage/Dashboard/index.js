import React, { Fragment } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { LatestOrders } from './_components/latest-orders';
import { Sales } from './_components/sales';
import { TasksProgress } from './_components/tasks-progress';
import { TotalCustomers } from './_components/total-customers';
import { TotalProfit } from './_components/total-profit';
import { TrafficByDevice } from './_components/traffic-by-device';
import { DashboardToolbar } from './_components/dashboard-toolbar';
import { Budget } from './_components/budget';


export default function Dashboard(props) {
    return (
        <Fragment>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    marginTop: '0',
                    py: '25px',
                    bgcolor: '#F9FAFC'
                }}
            >
                <Container maxWidth={false}>
                    <DashboardToolbar />
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Budget />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalCustomers />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TasksProgress />
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TotalProfit sx={{ height: '100%' }} />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={12}
                            xl={9}
                            xs={12}
                        >
                            <Sales />
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xl={3}
                            xs={12}
                        >
                            <TrafficByDevice sx={{ height: '100%' }} />
                        </Grid>
                        <Grid
                            item
                            lg={12}
                            md={6}
                            xl={12}
                            xs={12}
                        >
                            <LatestOrders />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}
