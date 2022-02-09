import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const inputStyle = {
    '& .MuiInputLabel-root': {
        fontSize: '16px',
        lineHeight: '16px',
        '&.Mui-focused': {
            color: '#dd003f'
        }
    },
    '& .Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dd003f',
        },
        '& legend': {
            fontSize: '12px',
        }
    }
};

const userType = [
    {
        label: 'Khách hàng',
        value: 'KhachHang'
    },
    {
        label: 'Quản Trị',
        value: 'QuanTri'
    }
]

const buttonStyle = {
    mt: '16px',
    bgcolor: '#dd003f',
    fontSize: '14px',
    color: '#fff',
    '&:hover': {
        bgcolor: '#3832A0',
        color: '#fff'
    }
}

export default function CustomerModal(props) {
    const { modalState, onClose } = props;

    const [userInfo, setUserInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP05",
        maLoaiNguoiDung: "KhachHang",
        hoTen: ""
    });

    const handleOnchange = (event) => {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
        console.log(userInfo);
    }

    if (modalState.addCustomer) return (
        <Modal
            open={modalState.open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    ADD NEW CUSTOMER
                </Typography>
                <Box id="modal-modal-description" sx={{ mt: 2 }}>
                    <form>
                        <TextField
                            fullWidth
                            label="Account"
                            margin="normal"
                            name="taiKhoan"
                            onChange={handleOnchange}
                            type="text"
                            variant="outlined"
                            sx={inputStyle}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            label="Password"
                            margin="normal"
                            name="matKhau"
                            onChange={handleOnchange}
                            type="password"
                            variant="outlined"
                            sx={inputStyle}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            label="Name"
                            margin="normal"
                            name="hoTen"
                            onChange={handleOnchange}
                            type="text"
                            variant="outlined"
                            sx={inputStyle}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            name="email"
                            onChange={handleOnchange}
                            type="text"
                            variant="outlined"
                            sx={inputStyle}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            label="Phone"
                            margin="normal"
                            name="soDt"
                            onChange={handleOnchange}
                            type="text"
                            variant="outlined"
                            sx={inputStyle}
                        >
                        </TextField>
                        <TextField
                            fullWidth
                            label="User Type"
                            margin="normal"
                            name="maLoaiNguoiDung"
                            onChange={handleOnchange}
                            select
                            value={userInfo.maLoaiNguoiDung}
                            variant="outlined"
                            sx={inputStyle}
                        >
                            {userType.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            fullWidth
                            sx={buttonStyle}
                        >Add Customer</Button>
                    </form>
                </Box>
            </Box>
        </Modal >
    )
    return (
        <Modal
            open={modalState.open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    EDIT CUSTOMER
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}
