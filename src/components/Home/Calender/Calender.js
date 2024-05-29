import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.scss';

const MyCalendar = () => {
    const [value, setValue] = useState(new Date());
    const [tasks, setTasks] = useState({
        '2024-05-23': ['Nhiệm vụ 1: Hoàn thành 100 chữ hán', 'Nhiệm vụ 2: Hoàn thành 100 chữ hán'],
        '2024-05-24': ['Nhiệm vụ 3: Hoàn thành 50 chữ hán', 'Nhiệm vụ 4: Hoàn thành 75 chữ hán'],
        '2024-05-29': ['Nhiệm vụ 3: Hoàn thành 50 chữ hán', 'Nhiệm vụ 4: Hoàn thành 75 chữ hán'],
        '2024-05-30': ['Nhiệm vụ 3: Hoàn thành 50 chữ hán', 'Nhiệm vụ 4: Hoàn thành 75 chữ hán'],
        '2024-05-31': ['Nhiệm vụ 3: Hoàn thành 50 chữ hán', 'Nhiệm vụ 4: Hoàn thành 75 chữ hán'],
    });

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    };

    const selectedDate = formatDate(value);
    const tasksForSelectedDate = tasks[selectedDate] || ['No tasks for this day'];

    return (
        <div className="calendar-container">
            <Calendar onChange={setValue} value={value} className="calendar-main" />
            <div className='tasks-container'>
                <p className='text-center'>
                    {tasksForSelectedDate.map((task, index) => (
                        <span key={index}>{task}<br /></span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default MyCalendar;
