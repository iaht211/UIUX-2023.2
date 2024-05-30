import NavBar from "./NavBar";
import './GiangDay.scss';

import Pagnination from "./Pagnination";
import React, { useState, useEffect } from 'react';
import ItemKPI from "./ItemKPI";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const GiangDay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const item_add = data.item_add;
    items = [...items, item_add];

    var [items, setItems] = useState([
        { id: 1, name: 'UI&UX', start_date: '07/04/2024', end_date: '08/06/2024', description: "Giảng dạy môn UI&UX", score: 60 },
        { id: 2, name: 'Chấm bài về nhà', start_date: '08/05/2024', end_date: '09/08/2024', description: "Giảng dạy môn UI&UX", score: 70 },
        { id: 3, name: 'Giảng dạy UI&UX lớp 4321', start_date: '09/06/2024', end_date: '09/10/2024', description: "Giảng dạy môn UI&UX", score: 80 },
    ]);

    const getLastId = () => {
        if (items.length === 0) return null;
        return items[items.length - 1].id;
    };

    const lastId = getLastId();

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddButton = () => {
        navigate('/add_kpi', { state: { lastId } })
        // console.log(item_add)
    };

    // Ensure item_add has a unique ID


    return (
        <div className="giangday-container">
            <button onClick={() => handleAddButton()}></button>
            <div className="navbar-container">
                <NavBar></NavBar>
            </div>

            <div className="content">
                <ul>
                    {items.map(item => (
                        <ItemKPI item={item} onRemove={handleRemove} />
                    ))}
                </ul>
            </div>

            <div className="pagnination">
                <Pagnination></Pagnination>
            </div>
        </div>

    )
}

export default GiangDay;