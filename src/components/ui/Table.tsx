'use client'
import { FC } from 'react';
import { DataGrid, GridColumnHeaderParams, type GridColDef } from '@mui/x-data-grid'
import { ApiRequest } from '@prisma/client';
import { useTheme } from 'next-themes';
import { createTheme, ThemeProvider } from '@mui/material';
const columsDef: GridColDef[] = [
    {
        field: 'col1',
        headerName: "Used api key",
        width: 400,
        renderHeader(params) {
            return (
                <strong className='font-semibold '>{params.colDef.headerName}</strong>
            )
        }
    },
    {
        field: 'col2', headerName: 'Path', width: 250
    },
    {
        field: 'col3', headerName: 'Recency', width: 250
    },
    {
        field: 'col4', headerName: 'Duration', width: 150
    },
    {
        field: 'col5', headerName: 'Status', width: 150
    },
]

const column = columsDef.map(col => {
    if (col.field === 'col1') {
        return col
    }
    return {
        ...col,
        renderHeader(params: GridColumnHeaderParams<any, any, any>) {
            return (
                <strong className='font-semibold '>{params.colDef.headerName}</strong>
            )
        }
    }
})
type ModifiedRequestType<Z extends keyof ApiRequest> = Omit<ApiRequest, Z> & {
    timestamp: string
}
interface TableProps {
    userRequest: ModifiedRequestType<'timestamp'>[]
};

const Table: FC<TableProps> = ({ userRequest }) => {
    const { theme: applicationTheme } = useTheme()
    const theme = createTheme({
        palette: {
            mode: applicationTheme === 'light' ? 'light' : 'dark'
        }
    })
    const row = userRequest.map(request => ({
        id: request.id,
        col1: request.usedApiKey,
        col2: request.path,
        col3: `${request.timestamp} ago`,
        col4: `${request.duration} ms`,
        col5: request.status

    }))
    return (
       <ThemeProvider theme={theme}>
        <DataGrid style={{backgroundColor:applicationTheme === 'light'? 'white': '#152238',fontSize:'1rem'}} pageSizeOptions={[5]} autoHeight disableRowSelectionOnClick initialState={{
            pagination:{
                paginationModel:{
                    pageSize:5
                }
            }
        }} columns={column} rows={row}/>


       </ThemeProvider>
    );
};

export default Table;