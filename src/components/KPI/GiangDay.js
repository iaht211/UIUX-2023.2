import NavBar from "./NavBar";
import './GiangDay.scss';
import plus from '../../assets/plus.svg';
import Pagnination from "./Pagnination";
import React, { useState } from 'react';
import ItemKPI from "./ItemKPI";


const GiangDay = ({ display, items, setItems, lastId, setDisplay, setLastId, editDisplay, setEditDisplay, itemEdit, setItemEdit }) => {

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddButton = () => {
        setDisplay(true);
    };

    const handlEditButton = (id) => {
        setEditDisplay(true);
        // id_new = id;
        // setItemEdit(getItemById(id));
        // setItemEditById(id);
        console.log(">>> check item edit", itemEdit.id);
        console.log(">>> check arrray items", items);
        console.log(">>> check id", id);
    };

    return (
        <div className="giangday-container">
            <div className="navbar-container">
                <NavBar></NavBar>
            </div>
            <div className="button">
                <button className="add-button" onClick={() => handleAddButton()}>
                    <img style={{ width: 20, height: 20 }} src={plus} />
                </button>
                <span className="name">Thêm KPI</span>
            </div>

            <div className="content">
                <ul>
                    {items.map(item => (
                        <ItemKPI item={item} onRemove={handleRemove} onEdit={handlEditButton} />
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