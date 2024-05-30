// // // src/PasswordChange.js

// // import React, { useState } from 'react';
// // import './PasswordChange.scss';

// // const PasswordChange = () => {
// //   const [currentPassword, setCurrentPassword] = useState('');
// //   const [newPassword, setNewPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (newPassword !== confirmPassword) {
// //       setError('New password and confirm password do not match!');
// //       return;
// //     }
// //     setIsLoading(true);
// //     // Simulate an API call
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       alert('Password changed successfully!');
// //       setCurrentPassword('');
// //       setNewPassword('');
// //       setConfirmPassword('');
// //       setError('');
// //     }, 2000);
// //   };

// //   return (
// //     <div className="password-change-container">
// //       <h2>Change Password</h2>
// //       {error && <div className="error-message">{error}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="password"
// //           placeholder="Current Password"
// //           value={currentPassword}
// //           onChange={(e) => setCurrentPassword(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="New Password"
// //           value={newPassword}
// //           onChange={(e) => setNewPassword(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Confirm New Password"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit" disabled={isLoading}>
// //           {isLoading ? 'Changing...' : 'Change Password'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default PasswordChange;

// // src/PasswordChange.js

// import React, { useState } from 'react';
// import './PasswordChange.scss';
// import { toast } from 'react-toastify';

// const PasswordChange = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate an API call
//     setTimeout(() => {
//       setIsLoading(false);
//       toast.success("Đổi mật khẩu thành công");
//       setCurrentPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//       setError('');
//     }, 0);
//   };

//   return (
//     <div className="password-change-container">
//       <div className="header">
//         <span>Đổi mật khẩu</span>
//       </div>
//       {error && <div className="error-message">{error}</div>}
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="password"
//             placeholder="Nhập mật khẩu hiện tại"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Nhập mật khẩu mới"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Nhập lại mật khẩu mới"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit">
//             Đổi mật khẩu
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PasswordChange;

// src/PasswordChange.js

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

