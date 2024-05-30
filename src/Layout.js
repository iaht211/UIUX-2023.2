import App from "./App";


import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import KPI from "./components/KPI/KPI";

import Calender from "./components/Calender/Calender";
import Add_kpi from "./components/Add_kpi/Add_kpi";
import Add_task from "./components/Add_task/Add_task";

import Setting from "./components/Setting/Setting";
import Project from "./components/Project/Statistical";
import SettingNotify from "./components/Setting/SettingNotify";
import GiangDay from "./components/KPI/GiangDay";
import KPIDetail from "./components/KPI/KPIDetail";
import CalendarMain from "./components/Calender/Calender"

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="project" element={<Project />} />

                    <Route path="kpi" element={<KPI />} />

                    <Route path="calender" element={<Calender />} />
                    <Route path="add_kpi" element={<Add_kpi />} />
                    <Route path="add_task" element={<Add_task />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="/setting/notify" element={<SettingNotify />} />
<<<<<<< HEAD

                    <Route path="/kpi/giangday" element={<GiangDay />} />
=======
                    <Route path="/kpi/giangday" element={<GiangDayAddKPI />} />
>>>>>>> d5de2bd06ca4eea1dd4a5f68acf44be46d6c4a4b
                    <Route path="/kpi/giangday/chitiet" element={<KPIDetail />} />

                    <Route path="calender" element={<CalendarMain />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="/setting/notify" element={<SettingNotify />} />
                    <Route path="/setting/changepassword" element={<PasswordChange />} />


                </Route>
                <Route path="/login" element={<Login />} >
                </Route>

            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    )
}
export default Layout;