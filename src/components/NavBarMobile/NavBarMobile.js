import './NavBarMobile.scss';
import { FaGithub } from 'react-icons/fa';
import { GiReactor } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBoxArchive } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const NavBarMobile = () => {
    const navigate = useNavigate();
    return (
        <div class="narbar-mobile-container">
            <div className="home-page">
                <div className='home-page-icon' onClick={() => { navigate("/") }}>
                    <FaHome size={35}></FaHome>
                </div>
            </div>
            <div className="statistic-page">
                <div className='statistic-icon' onClick={() => { navigate("/project") }} >
                    <FaChartBar size={35}></FaChartBar>
                </div>
            </div>
            <div className="kpi-page">
                <div className='kpi-icon' onClick={() => { navigate("/kpi/giangday") }}>
                    <FaBoxArchive size={35} ></FaBoxArchive>
                </div>
            </div>
            <div className='calendar-page'>
                <div className='calendar-icon' onClick={() => { navigate("/calender") }}>
                    <SlCalender size={35}></SlCalender>
                </div>
            </div>
            <div className="setting-page">
                <div className='setting-icon' onClick={() => { navigate("/setting") }}>
                    <IoMdSettings size={35}></IoMdSettings>
                </div>
            </div>
        </div >
    )
}

export default NavBarMobile;
