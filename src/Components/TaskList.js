import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'taskName', headerName: 'Task Title', width: 130 },
];

export default function TaskList(props) {
    const [row, setRow] = React.useState();
    const [select, setSelection] = React.useState(props.arr === undefined ? [] : props.arr.filter((task) => {return task.status === 1}).map((task) => {return task.id}));

    const handleRowSelection = (e) => {
        setSelection(e);
    }

    React.useEffect(() => {
        props.completeTask(select);
    }, [select]);

    return (
        <div style={{ height: 400, width: '100%', colorScheme: props.color}}>
            <DataGrid
                rows={props.arr === undefined ? [] : props.arr}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                NoRowsOverlay
                selectionModel={select}
                onSelectionModelChange={handleRowSelection}
            />
        </div>
    );
}
