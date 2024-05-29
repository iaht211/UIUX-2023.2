import NavBar from "./NavBar";
import './GiangDay.scss';

import Pagnination from "./Pagnination";
import React, { useState } from 'react';
import ItemKPI from "./ItemKPI";

const GiangDay = () => {

    const [items, setItems] = useState([
        { id: 1, name: 'UI&UX', start_date: '07/04/2024', end_date: '08/06/2024', description: "Giảng dạy môn UI&UX", score: 60 },
        { id: 2, name: 'Chấm bài về nhà', start_date: '08/05/2024', end_date: '09/08/2024', description: "Giảng dạy môn UI&UX", score: 70 },
        { id: 3, name: 'Giảng dạy UI&UX lớp 4321', start_date: '09/06/2024', end_date: '09/10/2024', description: "Giảng dạy môn UI&UX", score: 80 },
    ]);

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="giangday-container">
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