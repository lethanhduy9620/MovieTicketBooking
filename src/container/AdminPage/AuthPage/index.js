import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../PublicPage/components/Loader';
import { actAuth } from './modules/action';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

export default function AuthPage(props) {
    const loading = useSelector(state => state.authReducer.loading);
    const error = useSelector(state => state.authReducer.error);

    const [state, setState] = useState({
        taiKhoan: null,
        matKhau: null
    })

    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
        console.log(state);
    };

    const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(actAuth(state, props.history))
    }

    const noti = () => {
        return error && <div className='alert alert-danger'>{error.response.data}</div>
    }

    if (loading) return <Loader></Loader>

    // return (
    //     <div className="container py-5">
    //         <div className="row">
    //             <div className="col-md-6 mx-auto">
    //                 <h3 className='text-center'>Sign in</h3>
    //                 {noti()}
    //                 <form onSubmit={handleLogin}>
    //                     <div className="form-group">
    //                         <label>Username</label>
    //                         <input type="text" className="form-control" name="taiKhoan" onChange={handleOnchange} />
    //                     </div>
    //                     <div className="form-group">
    //                         <label>Password</label>
    //                         <input type="text" className="form-control" name="matKhau" onChange={handleOnchange} />
    //                     </div>
    //                     <button type="submit" className="btn btn-success">
    //                         Login
    //                     </button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <Fragment>
            <Box
                component="main"
                sx={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%',
                }}
            >
                <Container maxWidth="sm">
                    <form onSubmit={handleLogin}>
                        <Box sx={{ my: 3 }}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                                sx={{
                                    fontSize: '32px',
                                    fontWeight: 700,
                                }}
                            >
                                Sign in
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            label="ID"
                            margin="normal"
                            name="taiKhoan"
                            onChange={handleOnchange}
                            type="text"
                            variant="outlined"
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontSize: '16px',
                                    lineHeight: '16px'
                                },
                                '& .Mui-focused legend': {
                                    fontSize: '12px'
                                }
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="matKhau"
                            onChange={handleOnchange}
                            type="password"
                            variant="outlined"
                            sx={{
                                '& .MuiInputLabel-root': {
                                    fontSize: '16px',
                                    lineHeight: '16px'
                                },
                                '& .Mui-focused legend': {
                                    fontSize: '12px'
                                }
                            }}
                        />
                        <Box sx={{ py: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    bgcolor: '#dd003f'
                                }}
                            >
                                Sign In Now
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
        </Fragment>
    )
}
