import Navbar from '../../components/Navbar';
import Widget from '../../components/Widget';
import Sidebar from './../../components/Sidebar/index';
import './style.scss';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
      </div>
    </div>
  )
}

export default Home