import React, { useState } from 'react';
import { actDangKy } from './modules/actions';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function DangKy(props) {
    // const data = 
    const dispatch = useDispatch();

    const [state, setState] = useState({
        thongTinDangKy: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDT: '',
            maNhom: 'GP05', //Mã nhóm mặc định của server cho tài khoản khách hàng là G00
            hoTen: '',
        },
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({
            thongTinDangKy: {
                ...state.thongTinDangKy, [name]: value,
            }
        });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(state.thongTinDangKy);
        dispatch(actDangKy(state.thongTinDangKy, props.history));
    }

    return (
        <div className='row container w-75 m-auto pt-5'>
            <div className='col-6 form-container'>
                <h3 className='form-title'>ĐĂNG KÝ</h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label>Họ Tên</label>
                        <input name="hoTen" className="form-control" placeholder="Họ và tên của bạn" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input name="taiKhoan" className="form-control" type="text" placeholder="Tên tài khoản của bạn" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input name='matKhau' className="form-control" type="password" placeholder="Mật khẩu" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name='email' className="form-control" type="text" placeholder="Email của bạn" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input name='soDT' className="form-control" type="text" placeholder="Số điện thoại của bạn" onChange={handleOnChange} />
                    </div>
                    <p>Bạn đã có tài khoản.<Link to='/dang-nhap'>Đăng Nhập</Link></p>
                    <button type="submit" className="btn btn-success btn-lg">Đăng Ký</button>
                </form>
            </div>
            <div className='col-6 discount-container'>
                <img src='./images/300x450_khuyenmai1.png' alt='' />
            </div>
        </div>
    );
}
