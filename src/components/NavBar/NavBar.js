import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Learning
          </Typography>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
            to="/home"
          >
            {" "}
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            to="/service"
          >
            {" "}
            <Button color="inherit">Service</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            to="/enroll"
          >
            <Button color="inherit">Enroll</Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#FFFFFF" }}
            to="/about"
          >
            <Button color="inherit">About</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
