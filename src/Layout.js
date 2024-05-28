import App from "./App";


import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import KPI from "./components/KPI/KPI";
import Calender from "./components/Calender/Calender";
import Setting from "./components/Setting/Setting";
import Project from "./components/Project/Statistical";
import SettingNotify from "./components/Setting/SettingNotify";
import GiangDay from "./components/KPI/GiangDay";
import KPIDetail from "./components/KPI/KPIDetail";


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="project" element={<Project />} />
                    <Route path="kpi" element={<KPI />} />
                    <Route path="calender" element={<Calender />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="/setting/notify" element={<SettingNotify />} />
                    <Route path="/kpi/giangday" element={<GiangDay />} />
                    <Route path="/kpi/giangday/chitiet" element={<KPIDetail />} />
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