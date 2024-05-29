import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Add_kpi = () => {
  
  const [kpiName, setKpiName] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState('');

  const handleCancel = () => {
    setKpiName('');
    setStartDate(null);
    setEndDate(null);
    setDescription('');
  };

  const handleDelete = () => {
    // Add logic to handle delete
    console.log('Deleted');
  };

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', fontSize: '18px' }}>
      <h2 style={{ fontSize: '24px' }}>Tạo KPI</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Tên KPI:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={kpiName}
          onChange={(e) => setKpiName(e.target.value)}
          style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Loại:</label>
        <select style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}>
          <option value="" disabled selected>Chọn</option>
          <option value="Giảng dạy">Giảng dạy</option>
          <option value="Nghiên cứu">Nghiên cứu</option>
          <option value="Phục vụ">Phục vụ</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: '0 0 48%' }}>
          <label>Ngày bắt đầu:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            timeFormat="HH:mm"
            placeholderText="Month, day, year, time"
            style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
          />
        </div>
        <div style={{ flex: '0 0 48%' }}>
          <label>Ngày kết thúc:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MMMM d, yyyy h:mm aa"
            showTimeSelect
            timeFormat="HH:mm"
            placeholderText="Month, day, year, time"
            style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
          />
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Descriptions:</label>
        <textarea
          placeholder="Write something"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', height: '150px', padding: '12px', marginTop: '10px', fontSize: '18px', resize: 'none' }}
        />
      </div>
      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
        <button type="button" style={{ padding: '1px 4px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px' }}>
          Thêm nhiệm vụ
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" style={{ padding: '12px 24px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}>
          Thêm KPI
        </button>
        <div>
          <button
            type="button"
            onClick={handleCancel}
            style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', marginRight: '10px' }}
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleDelete}
            style={{ padding: '12px 24px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_kpi;
