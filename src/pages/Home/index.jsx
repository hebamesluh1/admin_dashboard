import Navbar from '../../components/Navbar';
import Sidebar from './../../components/Sidebar/index';
import './style.scss';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        <Navbar/>
        Home Container
      </div>
    </div>
  )
}

export default Home