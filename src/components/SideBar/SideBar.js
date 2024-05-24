import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { GiReactor } from "react-icons/gi";
import sidebarBg from '../../assets/bg2.jpg';
import './SideBar.scss'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBoxArchive } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";



const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <GiReactor size={'3em'} color='00bfff' />
                        <span>Hoi Dan IT</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaHome />}
                        >
                            Trang chủ
                            <Link to="/" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaBoxArchive />}
                        >
                            KPI
                            <Link to="/kpi" />
                        </MenuItem>

                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaChartBar />}
                        >
                            Thống kê
                            <Link to="/statistical" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<SlCalender />}
                        >
                            Lịch
                            <Link to="/calender" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<IoMdSettings />}
                        >
                            Cài đặt
                            <Link to="/setting" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar/tree/v0.x"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                react pro side bar old version
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;