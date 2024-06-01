import './App.scss';
// import Header from './components/Header/Header';
import { Outlet } from "react-router-dom"
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import NavBarMobile from './components/NavBarMobile/NavBarMobile';

function App() {
  return (
    <div className="app-container">
      <div className='sidebar-content'>
        <SideBar />
      </div>

      <div className='main-content'>

        <div className='app-content'>
          <div className='navbar-content'>
            <NavBar />
          </div>
          <Outlet />
        </div>
      </div>

      <div className='navbar-mobile'>
        <NavBarMobile></NavBarMobile>
      </div>
    </div>
  );
}

export default App;
