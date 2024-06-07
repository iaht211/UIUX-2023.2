import React, { useState } from 'react';
import styled from 'styled-components';
import './NavBar.scss';
import search_logo from '../../assets/logo-search.svg';
import notifi_logo from '../../assets/notification-logo.svg';
import avatar from '../../assets/avatar.svg';
import avatarGirl from '../../assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_ccexpress (1) 1.png';
import abc_icon from '../../assets/abc-icon.svg';  // Import the icon

// Styled component for the notification overlay
const NotificationOverlay = styled.div`
    position: absolute;
    top: 60px;  // Adjust as needed
    right: 10px;  // Adjust as needed
    width: 300px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1000;
    padding: 16px;
`;

const NotificationBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const NotificationContent = styled.div`
    display: flex;
    align-items: center;
`;

const NotificationText = styled.p`
    margin: 0;
    font-size: 14px;
    margin-left: 10px;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #aaa;
`;

const NavBar = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        "Nhớ làm bài tập UI&UX",
        "Deadline bài tập",
        "Chưa hoàn thành bài A"
    ]);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const removeNotification = (index) => {
        setNotifications(notifications.filter((_, i) => i !== index));
    };

    return (
        <div className='navbar-container'>
            <div className="search">
                <div className='search-logo'>
                    <img style={{ width: 16, height: 16 }} src={search_logo} className='search_logo' alt="search logo" />
                </div>
                <div className="input-text">
                    <input type="text" placeholder="Search here..." />
                </div>
            </div>

            <div className="notifi-profile">
                <div className='notifi' onClick={toggleNotifications}>
                    <img style={{ width: 40, height: 40 }} src={notifi_logo} alt="notification logo" />
                </div>
                <div className='profile'>
                    
                    <div className="avatar">
                        <img style={{ width: 50, height: 50 }} src={avatarGirl} alt="avatar" />
                    </div>
                </div>
            </div>

            {showNotifications && (
                <NotificationOverlay>
                    {notifications.map((notification, index) => (
                        <NotificationBox key={index}>
                            <NotificationContent>
                                <img src={abc_icon} alt="icon" style={{ width: 20, height: 20 }} />  {/* Add the icon here */}
                                <NotificationText>{notification}</NotificationText>
                            </NotificationContent>
                            <CloseButton onClick={() => removeNotification(index)}>X</CloseButton>
                        </NotificationBox>
                    ))}
                </NotificationOverlay>
            )}
        </div>
    );
}

export default NavBar;
