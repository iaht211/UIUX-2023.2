import React, { useState } from 'react';
import './ProfileChange.scss';
import { FaUserGraduate } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons'
import avatar from '../../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const ProfileChange = () => {
  const [isEditing, setIsEditing] = useState({
    email: false,
    dob: false,
    phone: false
  });

  const [profileData, setProfileData] = useState({
    email: 'long.qc210000@sis.hust.edu.vn',
    dob: '20/02/2003',
    phone: '099.999.1111',
    class: 'CNTT Việt Nhật 03 - K66',
    institute: 'Công nghệ thông tin và truyền thông',
    degree: 'Việt Nhật - K66'
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing({ email: false, dob: false, phone: false });
  };

  const navigate = useNavigate();

  return (

    <div className="profile-container">
      <div className='back-page-button' onClick={() => { navigate('/setting') }}>
        <FaArrowLeft></FaArrowLeft>
      </div>
      <div className="header">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="name">Quyền Chí Long</div>
        <div className="id">20210000</div>
      </div>
      <div className="info-container">
        <div className="info-row">
          <span className="info-label-edit">Email</span>
          {isEditing.email ? (
            <input
              type="text"
              name="email"
              value={profileData.email}
              onChange={handleChange}
            />
          ) : (
            <span className="info-value">{profileData.email}</span>
          )}
          <button
            className="edit-button"
            onClick={() => isEditing.email ? handleSave() : handleEditClick('email')}
          >
            {isEditing.email ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} />}
          </button>
        </div>
        <div className="info-row">
          <span className="info-label-edit">Ngày sinh</span>
          {isEditing.dob ? (
            <input
              type="text"
              name="dob"
              value={profileData.dob}
              onChange={handleChange}
            />
          ) : (
            <span className="info-value">{profileData.dob}</span>
          )}
          <button
            className="edit-button"
            onClick={() => isEditing.dob ? handleSave() : handleEditClick('dob')}
          >
            {isEditing.dob ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} />}
          </button>
        </div>
        <div className="info-row">
          <span className="info-label-edit">SDT</span>
          {isEditing.phone ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          ) : (
            <span className="info-value">{profileData.phone}</span>
          )}
          <button
            className="edit-button"
            onClick={() => isEditing.phone ? handleSave() : handleEditClick('phone')}
          >
            {isEditing.phone ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} />}
          </button>
        </div>
        <div className="info-row">
          <span className="info-label">Lớp</span>
          <span className="info-value">{profileData.class}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Viện/Khoa/Trường</span>
          <span className="info-value">{profileData.institute}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Hệ đại học</span>
          <span className="info-value">{profileData.degree}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileChange;
