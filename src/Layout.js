import App from "./App";


import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import KPI from "./components/KPI/KPI";
import Statistical from "./components/Statistical/Statistical";
import Calender from "./components/Calender/Calender";
import Setting from "./components/Setting/Setting";


const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="kpi" element={<KPI />} />
                    <Route path="statistical" element={<Statistical />} />
                    <Route path="calender" element={<Calender />} />
                    <Route path="setting" element={<Setting />} />
                </Route>
                {/* <Route path="/admin" element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route> */}
                <Route path="/login" element={<Login />} >
                </Route>
                {/* <Route path="/signup" element={<Signup />} >
                </Route> */}
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