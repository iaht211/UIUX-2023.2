import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const AddKPI = ({ display, items, setItems, lastId, setDisplay, setLastId, setEditDisplay, editDisplay, itemEdit, setItemEdit }) => {

    const [kpiName, setKpiName] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [description, setDescription] = useState('');

    const handleCancel = () => {
        setEditDisplay(false);
        setDisplay(false);
    };

    const handleAddKPI = () => {
        const item_add = {
            id: lastId.lastId,
            name: kpiName,
            start_date: "08/04/2024",
            end_date: "09/06/2024",
            description: description,
            score: 0
        }
        setItems([...items, item_add]);
        setLastId(lastId.lastId + 1);
        setDisplay(false);
    }

    const handleDate = (date) => {
        setStartDate(date)
    }

    const handleEditKPI = (date) => {
        setEditDisplay(false);
        const item_edit = {
            id: 1,
            name: kpiName,
            start_date: "08/04/2024",
            end_date: "09/06/2024",
            description: description,
            score: 60
        }

        items[0].name = item_edit.name;
        items[0].description = item_edit.description;
        items[0].score = item_edit.score;
    }
    console.log(">>> check render add kpi");

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', fontSize: '18px' }}>
            {editDisplay
                ?
                <h2 style={{ fontSize: '24px' }}>Chỉnh sửa  KPI</h2>

                :
                <h2 style={{ fontSize: '24px' }}>Tạo KPI</h2>

            }
            {/* <h2 style={{ fontSize: '24px' }}>Tạo KPI</h2> */}
            <div style={{ marginBottom: '20px' }}>
                <label>Tên KPI:</label>
                <input
                    type="text"
                    placeholder={editDisplay ? "UI&UX" : "Nhập tên"}
                    value={kpiName}
                    onChange={(e) => setKpiName(e.target.value)}
                    style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Loại:</label>
                <select style={{ width: '100%', padding: '12px', marginTop: '10px', fontSize: '18px' }}>
                    {editDisplay

                        ?
                        <option value="" disabled selected>
                            Giảng dạy
                        </option>
                        :
                        <option value="" disabled selected>
                            Chọn
                        </option>
                    }
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
                        placeholderText={editDisplay ? "07/04/2024" : "day, month, year"}
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
                        placeholderText={editDisplay ? "08/06/2024" : "Month, day, year"}
                        style={{ padding: '12px', width: '100%', marginTop: '10px', fontSize: '18px' }}
                    />
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Descriptions:</label>
                <textarea
                    placeholder={editDisplay ? "Giảng dạy môn UI&UX" : "Write something"}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ width: '100%', height: '150px', padding: '12px', marginTop: '10px', fontSize: '18px', resize: 'none' }}
                />
            </div>
            {/* <div style={{ marginBottom: '20px', textAlign: 'right' }}>
                <button
                    type="button"
                    style={{ padding: '1px 4px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px' }}
                >
                    Thêm nhiệm vụ
                </button>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                {editDisplay ?
                    <button
                        type="button"
                        onClick={handleEditKPI}
                        style={{ padding: '12px 24px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
                    >
                        Sửa KPI
                    </button>

                    :

                    <button
                        type="button"
                        onClick={handleAddKPI}
                        style={{ padding: '12px 24px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
                    >
                        Thêm KPI
                    </button>
                }
                <div>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={{ padding: '12px 24px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', marginRight: '10px' }}
                    >
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddKPI;
