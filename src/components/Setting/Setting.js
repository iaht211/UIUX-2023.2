import React from "react";
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../Setting/ToggleSwitch';
import avatar from '../../assets/avatar.svg';
import avatarGirl from '../../assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_ccexpress (1) 1.png';
import key from '../../assets/Key.svg';
import ho_so from '../../assets/flopy.svg';
import user from '../../assets/Person.svg';
import thong_bao from '../../assets/thong-bao.svg';
import './Setting.scss';

const Setting = () => {
    const navigate = useNavigate();

    return (
        <div className="setting-container">
            <div className="dang-xuat">
                <div className='profile'>
                    <div className="avatar">
                        <img src={avatarGirl} alt="Avatar" />
                    </div>
                    <span className='hoten'>Linh Nguyễn</span>
                </div>
                <button className='button-dang-xuat-1' onClick={() => { navigate("/login") }}>Đăng xuất</button>
            </div>
            <div className="bao-mat">
                <div className='box-bao-mat'>
                    <span>Bảo mật</span>
                </div>
                <div className='box-doi-pass'>
                    <div className='box-doi-pass-1'>
                        <img src={key} alt="Key" />
                        <span>Đổi mật khẩu</span>
                        <button className='doi-mat-khau' onClick={() => { navigate("/setting/changepassword") }}>Chỉnh sửa</button>
                    </div>
                </div>
                <div className='box-ho-so'>
                    <div className='box-ho-so-1'>
                        <img src={ho_so} alt="Ho so" />
                        <span>Hồ sơ</span>
                        <button className='chinh-sua' onClick={() => { navigate("/setting/changeprofile") }}>Chỉnh sửa</button>
                    </div>
                </div>
                <div className='luu-ttdn'>
                    <div className='luu-ttdn-main'>
                        <img src={user} alt="User" />
                        <span>Lưu thông tin</span>
                        <ToggleSwitch label="Save" id = "toggleSave"/>
                    </div>
                </div>
            </div>
            <div className="thong-bao">
                <img src={thong_bao} alt="Thong bao" />
                <span>Thông báo</span>
                <button className='cai-dat' onClick={() => { navigate("/setting/notify") }}>Cài đặt</button>
            </div>
        </div>
    )
}

export default Setting;
