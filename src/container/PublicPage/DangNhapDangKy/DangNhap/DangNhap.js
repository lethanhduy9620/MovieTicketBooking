import React, { useState } from 'react';
import { actDangNhap } from './modules/actions';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

export default function DangNhap(props) {


    const dispatch = useDispatch();

    const [state, setState] = useState({
        thongTinDangNhap: {
            taiKhoan: '',
            matKhau: '',
            maLoaiNguoiDung: 'KhachHang',
        },
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({
            thongTinDangNhap: {
                ...state.thongTinDangNhap, [name]: value,
            }
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(actDangNhap(state.thongTinDangNhap, props.history));
    }

    return (
        <div className='row container w-75 m-auto pt-5'>
            <div className='col-6 form-container'>
                <h3 className='form-title'>ĐĂNG NHẬP</h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input name="taiKhoan" className="form-control" placeholder="Tên tài khoản của bạn" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input name='matKhau' className="form-control" type="password" placeholder="Mật khẩu" onChange={handleOnChange} />
                    </div>
                    <p>Bạn chưa có tài khoản?<Link to='/dang-ky'>Đăng Ký</Link></p>
                    <button type="submit" className="btn btn-success btn-lg">Đăng Nhập</button>
                </form>
            </div>
            <div className='col-6 discount-container'>
                <img src='./images/300x450_khuyenmai1.png' alt='' />
            </div>
        </div>
    );
}
