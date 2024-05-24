import './App.scss';
// import Header from './components/Header/Header';
import { Outlet } from "react-router-dom"
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="app-container">
      <div className='sidebar-content'>
        <SideBar />

      </div>

      <div className='main-content'>
        <div className='navbar-content'>
          <NavBar />
        </div>
        <div className='app-content'>
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default App;
