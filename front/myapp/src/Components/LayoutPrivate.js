import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function LayoutPrivate() {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
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

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                CRM For You
              </Link>
            </Typography>

            <Button color="inherit">
              <Link
                to="/customers"
                style={{ color: "white", textDecoration: "none" }}
              >
                Customers
              </Link>
            </Button>

            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ paddingTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutPrivate;
