import './style.scss';

import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../mock/dataTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const DataTable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test"><div className="viewButton">View</div></Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
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