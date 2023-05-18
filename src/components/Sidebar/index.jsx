import './style.scss';

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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">DASHBOARD</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <apan>Dashboard</apan>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleOutlinedIcon className="icon" />
            <apan>Users</apan>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className="icon" />
            <apan>Products</apan>
          </li>
          <li>
            <BorderStyleOutlinedIcon className="icon" />
            <apan>Orders</apan>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <apan>Delivery</apan>
          </li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar