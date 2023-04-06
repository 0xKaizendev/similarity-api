'use client'
import { FC } from 'react';
import { DataGrid, GridColumnHeaderParams, type GridColDef } from '@mui/x-data-grid'
import { ApiRequest } from '@prisma/client';
import { useTheme } from 'next-themes';
import { createTheme, ThemeProvider } from '@mui/material';
import Paragraph from './Paragraph';
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
<<<<<<< HEAD
        headerName: "Path",
        field: 'col2', width: 250
    },
    {
        field: 'col3', headerName: 'Recency', width: 250, headerClassName: ""
=======
        field: 'col2', headerName: 'Path', width: 250
    },
    {
        field: 'col3', headerName: 'Recency', width: 250
>>>>>>> d612a74a4df628ad56b06541c62a987f76b0360c
    },
    {
        field: 'col4', headerName: 'Duration', width: 150
    },
    {
        field: 'col5', headerName: 'Status', width: 150
    },
]

const column = columsDef.map(col => {
    return {
        ...col,
        renderHeader(params: GridColumnHeaderParams<any, any, any>) {
            return (
                <Paragraph >{params.colDef.headerName}</Paragraph>
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
            <DataGrid style={{ backgroundColor: applicationTheme === 'light' ? 'white' : '#152238', fontSize: '0.9rem', fontWeight: 'lighter' }} pageSizeOptions={[5]} autoHeight disableRowSelectionOnClick initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 5
                    }
                }
            }} columns={column} rows={row} />


        </ThemeProvider>
    );
};

export default Table;