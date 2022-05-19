import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ColorSelect(props) {
  const [color, setColor] = React.useState("Black");

  const handleChange = (event) => {
    setColor(event.target.value);
    props.changeColor(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"Black"}>Black</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
