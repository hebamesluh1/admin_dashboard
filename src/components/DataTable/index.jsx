import './style.scss';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../mock/dataTable';
import { Link } from 'react-router-dom';


const DataTable = () => {
  
    const actionColumn =[
        {field:"action",headerName:"Action",width:200,renderCell:()=>{
            return(
                <div className="cellAction">
                    <Link to="/users/test"><div className="viewButton">View</div></Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}
    ]
    return (
        <div className='dataTable'>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className='link'>
                Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
          
            />
        </div>
    )
}

export default DataTable