import React from 'react';
import './NavBar.scss';
import search_logo from '../../assets/logo-search.svg';
import notifi_logo from '../../assets/notification-logo.svg';
import avatar from '../../assets/avatar.svg';

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
                    <div style={{ width: '100%', height: '100%', color: 'rgba(35.70, 66.63, 229.06, 0.56)', fontSize: 9, fontFamily: 'Poppins', fontWeight: '500', letterSpacing: 0.33, wordWrap: 'break-word' }}>Quyền Chí Long<br />20210000</div>
                    <div className="avatar">
                        <img style={{ width: 40, height: 40 }} src={avatar} />
                    </div>
                </div>
            </div>

        </div>

    );
}

export default NavBar;
