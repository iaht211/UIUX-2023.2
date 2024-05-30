import NavBar from "./NavBar";
import './GiangDay.scss';
import plus from '../../assets/plus.svg';
import Pagnination from "./Pagnination";
import React, { useState, useEffect } from 'react';
import ItemKPI from "./ItemKPI";

const GiangDay = ({ display, items, setItems, lastId, setDisplay, setLastId, editDisplay, setEditDisplay, itemEdit, setItemEdit }) => {

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddButton = () => {
        setDisplay(true);
    };

    // var id_new = 0;
    // var k = 0;
    // const setItemEditById = (id) => {
    //     for (let i = 0; i < items.length; i++) {
    //         var k = i;
    //         console.log(">>> check items id", items[i].id);
    //         console.log(items[i]);
    //         if (items[i].id === id) {
    //             console.log(items[i] === id)
    //             setItemEdit({
    //                 id: items[i].id,
    //                 name: items[i].name,
    //                 start_date: items[i].start_date,
    //                 end_date: items[i].end_date,
    //                 description: items[i].description,
    //                 score: items[i].score
    //             });
    //             return;
    //         }
    //     }
    //     // setItemEdit(null);
    // };

    // const item = getItemById(2); // Thay 2 bằng id mà bạn muốn truy cập


    const handlEditButton = (id) => {
        setEditDisplay(true);
        // id_new = id;
        // setItemEdit(getItemById(id));
        // setItemEditById(id);
        console.log(">>> check item edit", itemEdit.id);
        console.log(">>> check arrray items", items);
        console.log(">>> check id", id);
    };

    // useEffect(() => {
    //     setItemEditById(id_new);
    //     console.log(">>> check useeffect");
    //     // This will always use latest value of count
    // }, [k]);

    return (
        <div className="giangday-container">
            <div className="navbar-container">
                <NavBar></NavBar>
            </div>

            <div className="content">
                <button className="add-button" onClick={() => handleAddButton()}>

                    <img style={{ width: 10, height: 10 }} src={plus} />

                </button>
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