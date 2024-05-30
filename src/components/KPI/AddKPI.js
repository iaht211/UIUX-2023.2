import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const AddKPI = () => {

    const [kpiName, setKpiName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState('');

    const location = useLocation();
    const lastId = location.state;
    const navigate = useNavigate();

    // const item_add = {
    //     id: lastId.lastId + 1,
    //     name: kpiName,
    //     start_date: startDate,
    //     end_date: endDate,
    //     description: description,
    //     score: 0
    // }

    const handleCancel = () => {
        setKpiName('');
        setStartDate(null);
        setEndDate(null);
        setDescription('');
    };

    const handleDelete = () => {
        // Add logic to handle delete
        // console.log('Deleted');
    };

    const handleAddKPI = () => {
        const item_add = {
            id: lastId.lastId + 1,
            name: kpiName,
            start_date: "08/04/12",
            end_date: "09/06/12",
            description: description,
            score: 0
        }
        navigate('/kpi/giangday', { state: { item_add } })
    }

    const handleDate = (date) => {
        // date = moment(date).format("dd/MM/yyyy")
        // const d = new Date(date).toLocaleDateString('fr-FR');
        setStartDate(date)
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', fontSize: '18px' }}>
            <h2 style={{ fontSize: '24px' }}>Tạo KPI</h2>
            <div style={{ marginBottom: '20px' }}>
                <label>Tên KPI:</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={kpiName}
                    onChange={(e) => setKpiName(e.target.value)}
                    style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Loại:</label>
                <select style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}>
                    <option value="" disabled selected>Chọn</option>
                    <option value="Giảng dạy">Giảng dạy</option>
                    <option value="Nghiên cứu">Nghiên cứu</option>
                    <option value="Phục vụ">Phục vụ</option>
                </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ flex: '0 0 48%' }}>
                    <label>Ngày bắt đầu:</label>
                    <DatePicker
                        selected={startDate}
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
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="MMMM d, yyyy"
                        // showTimeSelect
                        timeFormat="HH:mm"
                        placeholderText="Month, day, year"
                        style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
                    />
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Descriptions:</label>
                <textarea
                    placeholder="Write something"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: '100%', height: '150px', padding: '12px', marginTop: '10px', fontSize: '18px', resize: 'none' }}
                />
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'right' }}>
                <button
                    type="button"
                    style={{ padding: '1px 4px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px' }}
                >
                    Thêm nhiệm vụ
                </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                    type="button"
                    onClick={handleAddKPI}
                    style={{ padding: '12px 24px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
                >
                    Thêm KPI
                </button>
                <div>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', marginRight: '10px' }}
                    >
                        Hủy
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        style={{ padding: '12px 24px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
                    >
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddKPI;