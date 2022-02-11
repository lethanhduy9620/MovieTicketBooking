import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actCustomerDataAdd, actCustomerDataCapNhatTaiKhoan, actCustomerDataGet } from './../modules/actions';

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
    const dispatch = useDispatch();

    const { modalState, onClose, customerDataEdit } = props;

    const [userInfo, setUserInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP05",
        maLoaiNguoiDung: "",
        hoTen: ""
    });

    const [prevState, setNewState] = useState(null);
    if (customerDataEdit && customerDataEdit?.content[0] != prevState) {
        setNewState(customerDataEdit.content[0]);
        setUserInfo({
            taiKhoan: customerDataEdit.content[0].taiKhoan,
            matKhau: customerDataEdit.content[0].matKhau,
            email: customerDataEdit.content[0].email,
            soDt: customerDataEdit.content[0].soDt,
            maLoaiNguoiDung: customerDataEdit.content[0].maLoaiNguoiDung,
            hoTen: customerDataEdit.content[0].hoTen,
            maNhom: 'GP05',
        });
    }

    function handleOnchange(event) {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    }

    const handleOnSubmit = (flag) => {
        if (flag === "ADD") {
            dispatch(actCustomerDataAdd(userInfo));
        }
        else {

            dispatch(actCustomerDataCapNhatTaiKhoan(userInfo));
        }
        dispatch(actCustomerDataGet());
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
                            noWrap
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
                            onClick={() => { handleOnSubmit('ADD') }}
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
                <Box id="modal-modal-description" sx={{ mt: 2 }}>
                    <form>
                        <TextField
                            fullWidth
                            label="Account"
                            margin="normal"
                            name="taiKhoan"
                            onChange={handleOnchange}
                            value={userInfo.taiKhoan}
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
                            value={userInfo.matKhau}
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
                            value={userInfo.hoTen}
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
                            value={userInfo.email}
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
                            value={userInfo.soDt}
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
                            value={userInfo.maLoaiNguoiDung}
                            onChange={handleOnchange}
                            select
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
                            onClick={() => { handleOnSubmit('EDIT') }}
                        >Edit Customer</Button>
                    </form>
                </Box>
            </Box>
        </Modal >
    )
}
