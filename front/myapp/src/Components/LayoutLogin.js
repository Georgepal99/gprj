import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
function LayoutLogin(){

   



    return (
        

        <div>
              <div>
              <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" to=""  sx={{ flexGrow: 1 }} >
                          <Link to="/lg/help"  style={{color:"white", textDecoration:"none"}}> CRM For You</Link>
                        </Typography>
                        <Button color="inherit" ><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></Button>
                        </Toolbar>
                    </AppBar>
                    </Box>
                </div>


            <div style={{paddingTop:"20px"}}>
            <Outlet />
            </div>

        </div>
    
    )
}

export default LayoutLogin;