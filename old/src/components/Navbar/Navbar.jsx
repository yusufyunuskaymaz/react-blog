import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
import { useContext } from "react";
import { logOut } from "../../auth/firebase";

export default function Login() {
  const navigate = useNavigate()
  const { currentUser } = useContext(UserContext);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = ()=>{
    if(confirm("Do you want to log out")){
      handleClose()
    logOut(navigate)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Software Blog
          </Typography>
            <div>
            {currentUser?.email}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser?.email ? (
                  <span>
                    <Link to="profile"><MenuItem>Profile</MenuItem></Link>
                    <Link to="login"><MenuItem onClick={handleLogout}>Logout</MenuItem></Link>
                    <Link to="settings"><MenuItem>Settings</MenuItem></Link>
                  </span>
                ) : (
                  <span>
                    <Link to="/">
                      <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Link>
                    <Link to="login">
                      <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link>
                    <Link to="register-user">
                      <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Link>
                  </span>
                )}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
