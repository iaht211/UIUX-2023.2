import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.scss'; // Ensure the correct file path
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <h1 className='text-center'>React Calendar</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span> {date.toDateString()}
                </p>
            </div>
        </div>
    );
}

export default CustomCalendar;
