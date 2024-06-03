import { Gauge } from '@mui/x-charts/Gauge';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './ItemKPI.scss';
import edit_task_kpi from '../../assets/edit_task_kpi.svg';
import delete_task_kpi from '../../assets/delete_task_kpi.svg';
import { FaArrowRight } from "react-icons/fa";

const ItemKPI = ({ item, onRemove, onEdit }) => {
    const navigate = useNavigate();

    const item_kpi_state = {
        id: item.id,
        name: item.name,
        start_date: item.start_date,
        end_date: item.end_date,
        description: item.description,
        score: item.score
    }

    const handleClick = () => {
        navigate("/kpi/giangday/chitiet", { state: item_kpi_state });
    };

    return (
        <div className="content-1">
            <div className="left-content-1">

                <div className="header">
                    <span>{item.name}</span>
                </div>
                <div className="content">
                    <span>{item.description}</span>
                </div>
                <div className="time">
                    <div className="start">
                        <span>Ngày bắt đầu</span>
                        <span>{item.start_date}</span>
                    </div>
                    <div className="deadline">
                        <span>Hạn</span>
                        <span>{item.end_date}</span>
                    </div>
                </div>

            </div>


            <div className="right-content-1">
                <div className='chart'>
                    <Gauge
                        value={item.score}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="80%"
                        outerRadius="100%"
                    // ...
                    />

                </div>

                <div className='edit-delete-button'>
                    <button className='edit-button-kpi'>
                        <img style={{ width: 20, height: 20, padding: 0 }} src={edit_task_kpi} onClick={() => onEdit(item.id)} />
                    </button>
                    <button className='delete-button-kpi' onClick={() => onRemove(item.id)}>
                        <img style={{ width: 20, height: 20, padding: 0 }} src={delete_task_kpi} />
                    </button>
                    <button className='navigate-button-kpi' onClick={handleClick} style={{ color: 'black' }}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div >

    )
}

export default ItemKPI;