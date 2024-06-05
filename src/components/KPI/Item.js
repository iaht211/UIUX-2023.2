import React, { useState } from 'react';
import './Item.scss';
import star from '../../assets/star.svg';
import starfilled from '../../assets/starfilled.svg'; //  yellow star icon
import date_icon from '../../assets/date-icon.svg';
import edit_task_kpi from '../../assets/edit_task_kpi.svg';
import delete_task_kpi from '../../assets/delete_task_kpi.svg';

const Item = ({ item, onRemove }) => {
    const [isStarred, setIsStarred] = useState(false);
    const [showPercentage, setShowPercentage] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const handleStarClick = () => {
        setIsStarred(!isStarred);
    };

    const handleMouseEnter = () => {
        calculatePercentage();
        setShowPercentage(true);
    };

    const handleMouseLeave = () => {
        setShowPercentage(false);
    };

    let classNameBoxShadow = '';
    if (item.id === 1) {
        classNameBoxShadow = 'highlight-on-time-box';
    } else if (item.id === 2) {
        classNameBoxShadow = 'highlight-on-doing-box';
    } else if (item.id === 3) {
        classNameBoxShadow = 'highlight-on-late-box';
    } else {
        classNameBoxShadow = 'highlight-on-doing-box';
    }

    const calculatePercentage = () => {
        const percentageCompleted = (item.current_progress / item.total_progress) * 100;
        setPercentage(percentageCompleted);

        if (percentageCompleted > 100) {
            setProgressBarColor('progress-bar-over');
        } else if (percentageCompleted > 90 && percentageCompleted <= 100) {
            setProgressBarColor('progress-bar-very-high');
        } else if (percentageCompleted > 70 && percentageCompleted <= 90) {
                setProgressBarColor('progress-bar-high');
        } else if (percentageCompleted > 50 && percentageCompleted <= 70) {
            setProgressBarColor('progress-bar-medium');
        } else if (percentageCompleted > 30 && percentageCompleted <= 50) {
            setProgressBarColor('progress-bar-low');
        } else if (percentageCompleted > 10 && percentageCompleted <= 30) {
            setProgressBarColor('progress-bar-very-low');
        } else {
            setProgressBarColor('progress-bar-bad');
        } 
    };

    const [progressBarColor, setProgressBarColor] = useState('');

    return (
        <div className={classNameBoxShadow} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='icon-star' onClick={handleStarClick}>
                <img
                    style={{ width: 24, height: 24, cursor: 'pointer' }}
                    src={isStarred ? starfilled : star}
                    alt="star icon"
                />
            </div>
            <div className='right-task-item'>
                <div className='name'>{item.name}</div>
                <div className='date-numbers'>
                    <div className='icon-date'>
                        <img style={{ width: 14, height: 14 }} src={date_icon} alt="date icon" />
                    </div>
                    <div className='date'>
                        <div className='start-date'>
                            <span className='name-date'>
                                Ngày bắt đầu
                            </span>
                            {item.start_date}
                        </div>

                        <div className='end-date'>
                            <span className='name-date'>
                                Ngày kết thúc
                            </span>
                            {item.end_date}
                        </div>
                    </div>
                    <div className='numbers'>{item.numbers} {item.unit}</div>
                </div>
                {/* Thanh tiến trình */}
                <div className="progress-bar">
                    <div className={`progress ${progressBarColor}`} style={{ width: `${percentage}%` }}></div>
                </div>
                {showPercentage && (
                    <div className="progress-percentage">{percentage}%</div>
                )}
            </div>

            <div className='left-task-item'>
                <button className='edit-button-kpi'>
                    <img style={{ width: 24, height: 24 }} src={edit_task_kpi} alt="edit icon" />
                </button>
                <button className='delete-button-kpi' onClick={() => onRemove(item.id)}>
                    <img style={{ width: 24, height: 24 }} src={delete_task_kpi} alt="delete icon" />
                </button>
            </div>
        </div>
    );
};

export default Item;
