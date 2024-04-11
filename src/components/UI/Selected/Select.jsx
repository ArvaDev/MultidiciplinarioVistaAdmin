import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [Rol, setRol] = React.useState(" ");
    
  const handleChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{width: "75%", margin: "15px 0"}}>
        <InputLabel id="demo-simple-select-standard-label">Rol de usuario</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Rol}
          onChange={handleChange}
          label="Rol de usuario"
        >
          <MenuItem value={10}>Administrador</MenuItem>
          <MenuItem value={20}>Socio</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}