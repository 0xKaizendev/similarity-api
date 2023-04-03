import { type GridColDef }  from '@mui/x-data-grid'
const columns : GridColDef[] =  [
    {
        field : 'col1', 
        headerName: "API Key used",
        width: 400 , 
        renderHeader(params) {
            return (
                <strong className='font-semibold '>{params.colDef.headerName}</strong>
            )
        }
    }
]