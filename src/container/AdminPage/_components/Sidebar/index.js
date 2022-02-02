import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { Box, Divider, Drawer, useMediaQuery, Typography } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { Users as UsersIcon } from '../../icons/users';
import { XCircle as XCircleIcon } from '../../icons/x-circle';
import { NavItem } from './nav-item';

const items = [
    {
        path: '/dashboard',
        icon: (<ChartBarIcon fontSize="small" />),
        name: 'Dashboard'
    },
    {
        path: '/customers',
        icon: (<UsersIcon fontSize="small" />),
        name: 'Customers'
    },
    {
        path: '/movies',
        icon: (<ShoppingBagIcon fontSize="small" />),
        name: 'Movies'
    }
];

export default function Sidebar(props) {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    useEffect(() => {
        if (open) {
            onClose?.()
        }
    }, [])

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{ px: 4 }}>
                        <Link component={RouterLink} to={'/dashboard'}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    // textAlign: 'center',
                                    pt: 3
                                }}
                            >
                                <img src='/images/logo1.png' alt='' />
                            </Typography>
                        </Link>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <NavItem
                            key={item.name}
                            icon={item.icon}
                            path={item.path}
                            name={item.name}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}
