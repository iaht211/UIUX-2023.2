import './Setting.scss';
import avatar from '../../assets/avatar.svg';
import ToggleSwitch from '../Setting/ToggleSwitch';
import React, { Component } from "react";
import key from '../../assets/Key.svg';
import ho_so from '../../assets/flopy.svg';
import user from '../../assets/Person.svg';
import thong_bao from '../../assets/thong-bao.svg';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const navigate = useNavigate();

    return (

        <div className="setting-container">
            <div className="dang-xuat">
                <div className='profile'>
                    <div className="avatar">
                        <img style={{ width: 70, height: 70 }} src={avatar} />
                    </div>
                    <span className='hoten'>Quyền Chí Long</span>
                </div>

                <div className='button-dang-xuat'>
                    <button className='button-dang-xuat-1'>Dang xuat</button>
                </div>

            </div>
            <div className="bao-mat">
                <div className='box-bao-mat'>
                    <span>Bảo mật</span>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='box-doi-pass'>
                    <div className='box-doi-pass-1'>
                        <img style={{ width: 24, height: 24 }} src={key} />
                        <span>Doi mat khau</span>
                        <button className='chinh-sua-1'>Chinh sua</button>
                    </div>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='box-ho-so'>

                    <div className='box-ho-so-1'>
                        <img style={{ width: 24, height: 24 }} src={ho_so} />

                        <span>Ho so</span>
                        <button className='chinh-sua-2'>Chinh sua</button>
                    </div>

                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='luu-ttdn'>
                    <div className='luu-ttdn-main'>
                        <img style={{ width: 24, height: 24 }} src={user} />

                        <span>Luu thong tin dang nhap</span>

                        <React.Fragment>
                            <ToggleSwitch label="Save" />
                        </React.Fragment>

                    </div>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>
            </div>
            <div className="thong-bao">
                <img style={{ width: 24, height: 24 }} src={thong_bao} />
                <span>Thong bao</span>
                <button className='cai-dat' onClick={() => { navigate("/setting/notify") }}>Cai dat</button>
            </div>
        </div>
    )
}

export default Setting;