import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.scss'; // Ensure the correct file path

const MyCalendar = () => {
    const [value, setValue] = useState(new Date());

    return (
        <div className="calendar-container">
            <Calendar onChange={setValue} value={value} className="calendar-main" />
            <p className='text-center'>
                <span className='bold'>Selected Date:</span> {Array.isArray(value) ? `${value[0]?.toDateString()} - ${value[1]?.toDateString()}` : value.toDateString()}
            </p>
        </div>
    );
}

export default MyCalendar;
