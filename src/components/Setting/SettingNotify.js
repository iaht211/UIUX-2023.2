import './SettingNotify.scss';
import ToggleSwitch from '../Setting/ToggleSwitch';
import React from "react";

const SettingNotify = () => {
    return (
        <div className="setting-container">
            <div className='setting-header'>
                <span>Quản lý thông báo</span>
            </div>
            <div className="notification-settings">
                <div className="setting-section">
                    <div className='setting-item'>
                        <span>Chế độ</span>
                        <div className='separator'></div>
                    </div>

                    <div className='setting-item'>
                        <div className='setting-description'>
                            <span>Nhận thông báo chung</span>
                            <React.Fragment>
                                <ToggleSwitch label="Save" id="toggle1" />
                            </React.Fragment>
                        </div>
                        <div className='separator'></div>
                    </div>

                    <div className='setting-item'>
                        <div className='setting-description'>
                            <span>Nhảy pop up thông báo</span>
                            <React.Fragment>
                                <ToggleSwitch label="Save" id="toggle2" />
                            </React.Fragment>
                        </div>
                        <div className='separator'></div>
                    </div>
                </div>
            </div>
            <div className="event-settings">
                <div className='setting-item'>
                    <span>Sự kiện</span>
                    <div className='separator'></div>
                </div>

                <div className='setting-item'>
                    <div className='setting-description'>
                        <span>Thông báo thêm chỉ tiêu</span>
                        <React.Fragment>
                            <ToggleSwitch label="Save" id="toggle3" />
                        </React.Fragment>
                    </div>
                    <div className='separator'></div>
                </div>

                <div className='setting-item'>
                    <div className='setting-description'>
                        <span>Thông báo deadline</span>
                        <React.Fragment>
                            <ToggleSwitch label="Save" id="toggle4" />
                        </React.Fragment>
                    </div>
                    <div className='separator'></div>
                </div>
            </div>
        </div>
    )
}

export default SettingNotify;
