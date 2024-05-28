import './SettingNotify.scss';
import avatar from '../../assets/avatar.svg';
import ToggleSwitch from '../Setting/ToggleSwitch';
import React, { Component } from "react";


const SettingNotify = () => {
    return (

        <div className="setting-container">
            <div className='header'>
                <span>Quản lý thông báo</span>
            </div>
            <div>
                <div className="bao-mat-1">
                    <div className='box-bao-mat'>
                        <span>Chế độ</span>
                        <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                    </div>

                    <div className='box-doi-pass'>
                        <div className='box-doi-pass-1'>
                            <span>Nhận thông báo chung</span>
                            <React.Fragment>
                                <ToggleSwitch label="Save" />
                            </React.Fragment>
                        </div>
                        <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                    </div>

                    <div className='box-ho-so'>
                        <div className='box-ho-so-1'>
                            <span>Nhảy pop up thông báo</span>
                            <React.Fragment>
                                <ToggleSwitch label="Save" />
                            </React.Fragment>
                        </div>
                        <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                    </div>
                </div>
            </div>
            <div className="bao-mat">
                <div className='box-bao-mat'>
                    <span>Sự kiện</span>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='box-doi-pass'>
                    <div className='box-doi-pass-1'>
                        <span>Nhận thông báo được thêm chỉ tiêu</span>
                        <React.Fragment>
                            <ToggleSwitch label="Save" />
                        </React.Fragment>

                    </div>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='box-ho-so'>
                    <div className='box-ho-so-1'>
                        <span>Ho so</span>

                        <React.Fragment>
                            <ToggleSwitch label="Save" />
                        </React.Fragment>
                    </div>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>

                <div className='luu-ttdn'>
                    <div className='luu-ttdn-main'>

                        <span className='name-test'>Nhận thông báo deadline sắp hết hạn</span>

                        <React.Fragment>
                            <ToggleSwitch label="Save" />
                        </React.Fragment>
                    </div>
                    <div style={{ width: '100%', height: '100%', border: '1px #081C15 solid' }}></div>
                </div>
            </div>
        </div>
    )
}

export default SettingNotify;