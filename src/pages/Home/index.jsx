import Sidebar from './../../components/Sidebar/index';
import './style.scss';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home-container">
        container
      </div>
    </div>
  )
}

export default Home