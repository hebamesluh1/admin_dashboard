import './style.scss'

//icons
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  //temprorary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(255,0,0,0.4)", color: "crimson" }} />
        )
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(218,165,32,0.2)", color: "goldenrod" }} />
        )
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all balance",
        icon: (
          <AccountBalanceOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(218,0,128,0.2)", color: "purple" }}
          />
        )
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{ backgroundColor: "rgba(0,128,0,0.2)", color: "green" }} />
        )
      };
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <TrendingUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget