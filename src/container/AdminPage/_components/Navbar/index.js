import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export default function Navbar(props) {
    const { onSidebarOpen, ...other } = props;

    return (
        <Fragment>
            <NavbarRoot
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon sx={{ fontSize: '25px' }} />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Avatar
                        sx={{
                            height: 40,
                            width: 40,
                            ml: 1,
                            mr: 1
                        }}
                        src="/images/avatars/avatar_1.png"
                    >
                        <UserCircleIcon fontSize="small" />
                    </Avatar>
                    <Typography sx={{ color: '#000' }}>
                        Admin
                    </Typography>
                </Toolbar>
            </NavbarRoot>
        </Fragment>
    )
}
