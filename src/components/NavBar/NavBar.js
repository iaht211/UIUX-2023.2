import React from 'react';
import './NavBar.scss';
import search_logo from '../../assets/logo-search.svg';
import notifi_logo from '../../assets/notification-logo.svg';
import avatar from '../../assets/avatar.svg';
import avatarGirl from '../../assets/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash_ccexpress (1) 1.png'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className="search">
                <div className='search-logo'>
                    <img style={{ width: 16, height: 16 }} src={search_logo} className='search_logo' />
                </div>
                <div className="input-text">
                    <input type="text" placeholder="Search here..." />
                </div>
            </div>

            <div className="notifi-profile">
                <div className='notifi'>
                    <img style={{ width: 40, height: 40 }} src={notifi_logo} />
                </div>
                <div className='profile'>
                    <div style={{ color: 'rgba(35.70, 66.63, 229.06, 0.56)', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500', letterSpacing: 0.33, wordWrap: 'break-word' }}>Linh Nguyễn</div>
                    <div className="avatar">
                        <img style={{ width: 50, height: 50 }} src={avatarGirl} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default NavBar;
