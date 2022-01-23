import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
    const pages = [
        {
            name: 'TRANG CHỦ',
            path: '/'
        },
        {
            name: 'PHIM ĐANG CHIẾU',
            path: '/phim-dang-chieu'
        },
        {
            name: 'PHIM SẮP CHIẾU',
            path: '/'
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="absolute" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Link
                        component={RouterLink}
                        to='/'>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                },
                                py: 3
                            }}
                        >
                            <img src='./images/logo1.png' alt='' />
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ fontSize: '3rem', }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none'
                                },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu} component={RouterLink} to={page.path}>
                                    <Typography textAlign="center" sx={{ fontSize: 14 }}>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link
                        component={RouterLink}
                        to='/'
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            py: 3
                        }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <img src='./images/logo1.png' alt='' />
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={handleCloseNavMenu}
                                component={RouterLink}
                                to={page.path}
                                sx={{
                                    my: 2,
                                    color: '#abb7c4',
                                    display: 'block',
                                    fontFamily: "'Dosis', sans-serif",
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: '#dcf836',
                                    }
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" sx={{
                            borderRadius: '25px',
                            backgroundColor: '#dd003f',
                            fontFamily: "'Dosis', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 'bold',
                            '&:hover': {
                                bgcolor: '#dcf836',
                            }
                        }}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
