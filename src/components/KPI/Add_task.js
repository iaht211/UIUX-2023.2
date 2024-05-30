import React, { useState } from 'react';
import './Add_task.scss';

const Add_task = ({ onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    const task = {
      taskName,
      quantity,
      unit,
      description,
    };
    console.log('Task Added:', task);

    // Clear the form after submission
    setTaskName('');
    setQuantity('');
    setUnit('');
    setDescription('');

    // Close the modal
    onClose();
  };

  const handleCancel = () => {
    // Clear the form fields and close the modal
    setTaskName('');
    setQuantity('');
    setUnit('');
    setDescription('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
          <div className="description-group">
            <label>Descriptions</label>
            <textarea
              placeholder="Write something..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="button-group">
            <button onClick={handleAddTask}>Thêm nhiệm vụ</button>
            <button onClick={handleCancel} className="cancel-button">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_task;
