// src/AddTask.js
import React, { useState } from 'react';
import './AddTask.scss'; // Make sure to include the SCSS file
import DatePicker from 'react-datepicker';

const AddTask = ({ items, setItems, displayAdd, setDisplayAdd, lastId, setLastId }) => {
  const [taskName, setTaskName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');

  const handleAddTask = () => {
    const add_task = {
      id: lastId + 1,
      name: taskName,
      numbers: quantity,
      unit: unit,
      start_date: "09/06/2024",
      end_date: "10/05/2024",
      description: description,
      current_progress: 0  , 
      total_progress: 0  
    };
    console.log('Task Added:', add_task);

    // Clear the form after submission
    // setTaskName('');
    // setQuantity('');
    // setUnit('');
    // setDescription('');
    setItems([...items, add_task])
    setDisplayAdd(false);
  };

  const handleCancel = () => {
    // Clear the form fields
    setDisplayAdd(false);
  };

  const handleDate = (date) => {
    setStartDate(date)
  }

  return (
    <div className="add-task-container">
      <div className="add-task-box">
        <input
          type="text"
          placeholder="Tên nhiệm vụ"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="input-group">
          <div>
            <label>Số lượng</label>
            <input
              type="number"
              placeholder="Enter number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Đơn vị</label>
            <input
              type="text"
              placeholder="Enter unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ flex: '0 0 48%' }}>
            <label>Ngày bắt đầu:</label>
            <DatePicker
              selected={start_date}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => handleDate(date)}
              // showTimeSelect
              timeFormat="HH:mm"
              placeholderText="day, month, year"
              style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
            />
          </div>
          <div style={{ flex: '0 0 48%' }}>
            <label>Ngày kết thúc:</label>
            <DatePicker
              selected={end_date}
              onChange={(date) => setEndDate(date)}
              dateFormat="MMMM d, yyyy"
              // showTimeSelect
              timeFormat="HH:mm"
              placeholderText="Month, day, year"
              style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
            />
          </div>
        </div>
        <div className="description-group">
          <label>Descriptions</label>
          <textarea
            placeholder="Write something..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className="button-group">
          <button onClick={handleAddTask} style={{ padding: '12px 24px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}>Thêm nhiệm vụ</button>
          <button onClick={handleCancel} style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', marginRight: '10px' }} className="cancel-button">Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
