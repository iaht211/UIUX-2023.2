import { useState } from "react";
import KPIDetail from "../KPI/KPIDetail";
import AddTask from "./AddTask";

const TaskManage = () => {
    const [displayAdd, setDisplayAdd] = useState(false);
    var [items, setItems] = useState([
        { id: 1, name: 'Write Report', numbers: '20', unit: "bài", start_date: "09/06/2024", end_date: "10/05/2024", description: "fdsfsdfsd" },
        { id: 2, name: 'Chấm bài về nhà', numbers: '30', unit: "bài", start_date: "09/06/2024", end_date: "10/05/2024", description: "fdsfsdfsd" },
        { id: 3, name: 'Giảng dạy UI&UX lớp 4321', numbers: '100', unit: 'tiết', start_date: "09/06/2024", end_date: "10/05/2024", description: "fdsfsdfsd" },
    ]);
    // false sẽ hiển thị ra màn AddTask

    const getLastId = () => {
        if (items.length === 0) return null;
        return items[items.length - 1].id;
    };

    const [lastId, setLastId] = useState(getLastId());


    return (
        <>
            {displayAdd
                ?
                <AddTask
                    items={items}
                    setItems={setItems}
                    displayAdd={displayAdd}
                    setDisplayAdd={setDisplayAdd}
                    lastId={lastId}
                    setLastId={setLastId}
                />
                :
                <KPIDetail
                    items={items}
                    setItems={setItems}
                    displayAdd={displayAdd}
                    setDisplayAdd={setDisplayAdd}
                    lastId={lastId}
                    setLastId={setLastId}
                />
            }
        </>
    )
}

export default TaskManage;