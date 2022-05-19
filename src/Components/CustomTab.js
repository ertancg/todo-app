import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DataTable from './TaskList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ColorSelect from './ColorSelect';
import TaskList from './TaskList';
import { ThemeProvider, createTheme } from '@mui/system';



export default function CustomTab(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [name, setName] = React.useState("");

  const textcolor = createTheme({
    palette: {
      text: {
        primary: '#173A5E',
      },
    },
  });

  return (
    <Box sx={{ width: '100%', typography: 'body1', color: "text.primary"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', displaycolor: 'text.primary'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="All" value="1" />
            <Tab label="Undone" value="2" />
            <Tab label="Done" value="3" />
            <Tab label="Settings" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TaskList arr={props.allTasks} completeTask={(id) => props.completeTask(id)} color={props.color}/>
          <span>
            <TextField id="standard-basic" label="Task Name" variant="standard" onChange={(text) => {setName(text.target.value)}}/>
            <Button variant="text" onClick={() => props.addTaskToArray(name)}>Add</Button>
          </span>
        </TabPanel>
        <TabPanel value="2">
          <TaskList sx={{color: "red"}} arr={props.allTasks.filter((task) => {return task.status === 0})} completeTask={(id) => props.completeTask(id)} color={props.color}/>
        </TabPanel>
        <TabPanel value="3">
        <TaskList arr={props.allTasks.filter((task) => {return task.status === 1})} completeTask={(id) => props.completeTask(id)} color={props.color}/>
        </TabPanel>
        <TabPanel value="4">
          <span><label style={{color: props.color}}>Text Color</label><ColorSelect changeColor={(color) => props.changeColor(color)}/></span>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

