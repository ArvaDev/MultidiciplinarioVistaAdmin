import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import { useContext } from 'react';

export default function MoreMenu() {

  const {logout} = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };


  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon sx={{ width: 32, height: 32 }}>M</MenuIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Link to={"/registrar-productos"} >
          <MenuItem>
            <ListItemIcon>
              <InventoryIcon fontSize="small" />
            </ListItemIcon>
            Agregar Productos
          </MenuItem>
        </Link>
        <Link to={"/registrar-socios"}>
          <MenuItem >
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Agregar Socios
          </MenuItem></Link>

        <MenuItem onClick={()=>{logout()}}>
          <ListItemIcon>
            <Logout fontSize="small"/>
          </ListItemIcon>
          Cerrrar sesión
        </MenuItem>

      </Menu>
    </>
  );
}
