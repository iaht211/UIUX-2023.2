import NavBar from "./NavBar";
import './GiangDay.scss';
import plus from '../../assets/plus.svg';
import Pagnination from "./Pagnination";
import React, { useState } from 'react';
import ItemKPI from "./ItemKPI";

<<<<<<< HEAD
const GiangDay = () => {

    const [items, setItems] = useState([
        { id: 1, name: 'UI&UX', start_date: '07/04/2024', end_date: '08/06/2024', description: "Giảng dạy môn UI&UX", score: 60 },
        { id: 2, name: 'Chấm bài về nhà', start_date: '08/05/2024', end_date: '09/08/2024', description: "Giảng dạy môn UI&UX", score: 70 },
        { id: 3, name: 'Giảng dạy UI&UX lớp 4321', start_date: '09/06/2024', end_date: '09/10/2024', description: "Giảng dạy môn UI&UX", score: 80 },
    ]);
=======
const GiangDay = ({ display, items, setItems, lastId, setDisplay, setLastId, editDisplay, setEditDisplay, itemEdit, setItemEdit }) => {
>>>>>>> d5de2bd06ca4eea1dd4a5f68acf44be46d6c4a4b

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

<<<<<<< HEAD
=======
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

>>>>>>> d5de2bd06ca4eea1dd4a5f68acf44be46d6c4a4b
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