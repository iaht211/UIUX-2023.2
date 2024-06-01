import './KPIDetail.scss';
import edit_task_kpi from '../../assets/edit_task_kpi.svg';
import delete_task_kpi from '../../assets/delete_task_kpi.svg';
import { Gauge } from '@mui/x-charts/Gauge';
import React, { useState } from 'react';
import Item from './Item';
import plus from '../../assets/plus.svg';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AddTask from '../Task/AddTask';
import { FaArrowLeft } from "react-icons/fa";

// import Add_task from '../Add_task/Add_task';

const KPIDetail = ({ items, setItems, displayAdd, setDisplayAdd, lastId, setLastId }) => {
    // const [items, setItems] = useState([
    //     { id: 1, name: 'Write Report', date: '07/04/2024', numbers: '735 words' },
    //     { id: 2, name: 'Chấm bài về nhà', date: '08/05/2024', numbers: '30 bài' },
    //     { id: 3, name: 'Giảng dạy UI&UX lớp 4321', date: '09/06/2024', numbers: '100 tiết' },
    // ]);

    const location = useLocation();
    const itemKPI = location.state;
    // const [showModal, setShowModal] = useState(false);

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddTaskClick = () => {
        setDisplayAdd(true);
    };

    // const handleCloseModal = () => {
    //     setShowModal(false);
    // };

    const navigate = useNavigate();

    return (
        <div className="kpi-detail-container">
            <div className='back-page-button' onClick={() => { navigate('/kpi/giangday') }}>
                <FaArrowLeft></FaArrowLeft>
            </div>
            <div className='content-1'>
                <div className="infor-kpi">
                    <div className="header">
                        <span>{itemKPI.name}</span>
                    </div>
                    <div className="content">
                        <span>{itemKPI.description}</span>
                    </div>

                    <div className="time">
                        <div className="start">
                            Ngay bat dau {itemKPI.start_date}
                        </div>
                        <div className="deadline">
                            Deadline {itemKPI.end_date}
                        </div>
                    </div>
                </div>

                {/* <div className='box-button-kpi'>
                    <button className='edit-button-kpi'>
                        <img style={{ width: 24, height: 24 }} src={edit_task_kpi} />
                    </button>
                    <button className='delete-button-kpi'>
                        <img style={{ width: 24, height: 24 }} src={delete_task_kpi} />
                    </button>
                </div> */}
            </div>

            <div className="chart">
                <Gauge
                    value={itemKPI.score}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="80%"
                    outerRadius="100%"
                />
            </div>

            <div className="list-task">
                <ul>
                    {items.map(item => (
                        <Item key={item.id} item={item} onRemove={handleRemove} />
                    ))}
                </ul>
            </div>

            <div style={{ width: '100%', height: '100%', paddingTop: 5, paddingBottom: 5, borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                <button
                    onClick={handleAddTaskClick}
                    style={{ flex: '1 1 0', height: 53, paddingLeft: 24, paddingRight: 24, paddingTop: 13, paddingBottom: 13, borderRadius: 8, border: '1px rgba(0, 0, 0, 0.20) dotted', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                >
                    <div>
                        <img style={{ width: 24, height: 24 }} src={plus} />
                    </div>
                    <div style={{ color: 'rgba(0, 0, 0, 0.20)', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 27, wordWrap: 'break-word' }}>Thêm nhiệm vụ</div>
                </button>
            </div>

            {/* {showModal && <AddTask onClose={handleCloseModal} />} */}
        </div>
    )
}

export default KPIDetail;
