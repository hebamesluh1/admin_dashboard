import './style.scss';
import { Link } from 'react-router-dom';

//icons 
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderStyleOutlinedIcon from '@mui/icons-material/BorderStyleOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">DASHBOARD</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <apan>Dashboard</apan>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users">
            <li>
              <PeopleOutlinedIcon className="icon" />
              <apan>Users</apan>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <ProductionQuantityLimitsOutlinedIcon className="icon" />
              <apan>Products</apan>
            </li>
          </Link>
          <Link to="">
            <li>
              <BorderStyleOutlinedIcon className="icon" />
              <apan>Orders</apan>
            </li>
          </Link>
          <Link to="">
            <li>
              <DeliveryDiningOutlinedIcon className="icon" />
              <apan>Delivery</apan>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon" />
            <apan>Stats</apan>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <apan>Notifications</apan>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorWeightOutlinedIcon className="icon" />
            <apan>System Health</apan>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <apan>Logs</apan>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <apan>Settings</apan>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <apan>Profile</apan>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <apan>Logout</apan>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar