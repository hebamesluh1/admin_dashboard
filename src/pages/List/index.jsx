import './style.scss'

import Sidebar from './../../components/Sidebar/index';
import Navbar from './../../components/Navbar/index';
import DataTable from '../../components/DataTable';

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <DataTable/>
      </div>
    </div>
  )
}

export default List