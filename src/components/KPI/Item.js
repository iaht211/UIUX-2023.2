import React from 'react';
import './Item.scss';
import mu_tot_nghiep from '../../assets/mu-tot-nghiep.svg';
import date_icon from '../../assets/date-icon.svg';
import edit_task_kpi from '../../assets/edit_task_kpi.svg';
import delete_task_kpi from '../../assets/delete_task_kpi.svg';

const Item = ({ item, onRemove }) => {
    let classNameBoxShadow = '';
    if (item.id === 1) {
        classNameBoxShadow = 'highlight-on-time-box';
    } else if (item.id === 2) {
        classNameBoxShadow = 'highlight-on-doing-box';
    } else {
        classNameBoxShadow = 'highlight-on-late-box';
    }

    return (
        <div className={classNameBoxShadow}>
            <div className='icon-mu-tot-nghiep'>
                <img style={{ width: 24, height: 24 }} src={mu_tot_nghiep} />
            </div>
            <div className='right-task-item'>
                <div className='name'>{item.name}</div>
                <div className='date-numbers'>
                    <div className='icon-date'>
                        <img style={{ width: 14, height: 14 }} src={date_icon} />
                    </div>
                    <div className='date'>{item.date}</div>
                    <div className='numbers'>{item.numbers}</div>
                </div>
            </div>

            <div className='left-task-item'>
                <button className='edit-button-kpi'>
                    <img style={{ width: 24, height: 24 }} src={edit_task_kpi} />
                </button>
                <button className='delete-button-kpi' onClick={() => onRemove(item.id)}>
                    <img style={{ width: 24, height: 24 }} src={delete_task_kpi} />
                </button>
            </div>
        </div>

    );
};

export default Item;