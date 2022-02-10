import React, { Fragment, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
import { theme } from './theme';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, styled } from '@mui/material/styles';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export default function AdminPage(props) {
    const { exact, path, component } = props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    if (localStorage.getItem("UserAdmin")) {
        return (
            <Fragment>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <DashboardLayoutRoot>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flex: '1 1 auto',
                                    flexDirection: 'column',
                                    width: '100%',
                                }}
                            >
                                <Route
                                    exact={exact}
                                    path={path}
                                    component={component}
                                />
                            </Box>
                        </DashboardLayoutRoot>
                        <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
                        <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
                    </CssBaseline>
                </ThemeProvider>
            </Fragment>
        )
    };
    return <Redirect to='/auth' />
}
