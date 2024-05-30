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

import { FaGithub } from 'react-icons/fa';
import { GiReactor } from "react-icons/gi";
import './SideBar.scss'
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBoxArchive } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";




const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    const location = useLocation();
    const { pathname } = location;

    return (
        <ProSidebar
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
                    <span>KPI</span>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaHome />}
                        className={pathname === '/' ? 'active' : ''}
                    >
                        Trang chủ
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem
                        icon={<FaChartBar />}

                        className={pathname === '/project' ? 'active' : ''}
                    >
                        Thống kê
                        <Link to="/project" />
                    </MenuItem>
                    <MenuItem
                        icon={<FaBoxArchive />}
                        className={pathname.startsWith('/kpi') ? 'active' : ''}
                    >
                        KPI
                        <Link to="/kpi" />
                    </MenuItem>
                    <MenuItem
                        icon={<SlCalender />}
                        className={pathname === '/' ? 'active' : ''}
                    >
                        Thêm KPI
                        <Link to="/add_kpi" />
                    </MenuItem>
                    <MenuItem
                        icon={<SlCalender />}
                        className={pathname === '/add_task' ? 'active' : ''}
                    >
                        Thêm Task
                        <Link to="/add_task" />
                    </MenuItem>
                    <MenuItem
                        icon={<SlCalender />}
                        className={pathname === '/calender' ? 'active' : ''}
                    >
                        Lịch
                        <Link to="/calender" />
                    </MenuItem>
                    <MenuItem
                        icon={<IoMdSettings />}
                        className={pathname === '/setting' ? 'active' : ''}
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
    );
};

export default SideBar;