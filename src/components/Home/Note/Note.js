import React from 'react';
import { Checkbox } from 'antd';
import './Note.scss'; // Import your custom CSS for styling
import { GrAdd } from "react-icons/gr";

const Note = () => {
  const notesData = [
    { label: 'Nhiệm vụ 1: Viết báo cáo', value: 'meeting' },
    { label: 'Nhiệm vụ 2: Chấm bài về nhà', value: 'project-updates' },
    { label: 'Nhiệm vụ 3: Giảng dạy UI&UX', value: 'todo-list' },
  ];

  const onChange = (checkedValues) => {
    console.log('checked notes:', checkedValues);
  };

  return (
    <div className="note-container">
      {notesData.map((note, index) => (
        <div key={note.value} className="note-row">
          <Checkbox
            key={note.value}
            className="note-checkbox"
            options={{ label: note.label, value: note.value }}
            onChange={onChange}
          >
            {note.label}
          </Checkbox>
        </div>
      ))}
      {/* <div className='add-note'>
      <GrAdd />
      <span style={{color: 'rgba(0, 0, 0, 0.2)'}}>Thêm ghi chú</span>
      </div> */}
    </div>
  );
};

export default Note;