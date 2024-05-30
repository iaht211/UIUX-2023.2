import React, { useState } from 'react';
import './PasswordChange.scss';
import { FaUnlockAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (newPassword == confirmPassword) {
        toast.success("Đổi mật khẩu thành công");
      }
      else {
        toast.error("Mật khẩu nhập lại không khớp");
      }
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setError('');
    }, 0);
  };

  return (
    <div className="password-change-container">
      <div className="header">
        <span>ĐỔI MẬT KHẨU</span>
      </div>
      <div className="form-container">
        <FaUnlockAlt className="icon" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="current-password">Mật khẩu cũ</label>
          <input
            type="password"
            id="current-password"
            placeholder="Mật khẩu cũ"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
          <label htmlFor="new-password">Mật khẩu mới</label>
          <input
            type="password"
            id="new-password"
            placeholder="Mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password">Nhập lại mật khẩu mới</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">
            Xác nhận
          </button>
          <button type="button" className="cancel-button">
            Hủy
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;

