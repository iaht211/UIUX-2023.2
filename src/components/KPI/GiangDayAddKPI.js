import { useState } from "react";
import GiangDay from "./GiangDay";
import AddKPI from "./AddKPI";

const GiangDayAddKPI = () => {
    const [display, setDisplay] = useState(false);
    // false hiển thị ra màn giảng dạy, true hiển thị ra màn add kpi
    var [items, setItems] = useState([
        { id: 1, name: 'UI&UX', start_date: ' 07/04/2024', end_date: ' 08/06/2024', description: "Giảng dạy môn UI&UX", score: 60 },
        { id: 2, name: 'Chấm bài về nhà', start_date: ' 08/05/2024', end_date: ' 09/08/2024', description: "Giảng dạy môn UI&UX", score: 70 },
        { id: 3, name: 'Giảng dạy UI&UX lớp 4321', start_date: ' 09/06/2024', end_date: ' 09/10/2024', description: "Giảng dạy môn UI&UX", score: 80 },
    ]);
    const [editDisplay, setEditDisplay] = useState(false);
    const [itemEdit, setItemEdit] = useState({
        id: null,
        name: '',
        start_date: '',
        end_date: '',
        description: '',
        score: null
    });

    // true hien thi ra man hinh edit, false thi giu nguyen

    const getLastId = () => {
        if (items.length === 0) return null;
        return items[items.length - 1].id;
    };

    const [lastId, setLastId] = useState(getLastId());

    return (
        <>
            {display || editDisplay
                ?
                <AddKPI
                    display={display}
                    items={items}
                    setItems={setItems}
                    lastId={lastId}
                    setDisplay={setDisplay}
                    setLastId={setLastId}
                    editDisplay={editDisplay}
                    setEditDisplay={setEditDisplay}
                    itemEdit={itemEdit}
                    setItemEdit={setItemEdit}
                />
                :
                <GiangDay
                    display={display}
                    items={items}
                    setItems={setItems}
                    lastId={lastId}
                    setDisplay={setDisplay}
                    setLastId={setLastId}
                    editDisplay={editDisplay}
                    setEditDisplay={setEditDisplay}
                    itemEdit={itemEdit}
                    setItemEdit={setItemEdit}
                />}
        </>
    )
}

export default GiangDayAddKPI;