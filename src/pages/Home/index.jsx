//components
import Chart from '../../components/Chart';
import Featured from '../../components/Featured';
import Navbar from '../../components/Navbar';
import Widget from '../../components/Widget';
import Sidebar from './../../components/Sidebar/index';
import Tables from '../../components/Tables/index';

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
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Lastest Transaction</div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home