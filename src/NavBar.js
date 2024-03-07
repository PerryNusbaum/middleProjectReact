import Home from "./Home";
import ForDonation from "./ForDonation";
import { NavLink, Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import {Avatar, AppBar, Toolbar,Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';


const NavBar = (props) => {
    return (<>
    <Box sx={{  position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
   
        <AppBar position="static"  style={{ backgroundColor: 'black' }}>
    
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Button color="inherit" component={NavLink} to="/home">
          Home
        </Button>
        <Button color="inherit" component={NavLink} to="/forDonation">
          For Donation
        </Button>
        </div>
        <img src="https://assets-global.website-files.com/65467772df5823449b650671/65467772df5823449b65099d_image%201_layerstyle.svg" alt="Logo" style={{  width: '500px', height: '100px' }} />
      </Toolbar>
      
    </AppBar>
  
    
    </Box>
    </>);
}

export default NavBar;