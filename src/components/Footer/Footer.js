import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="p" color="inherit">
              Owner And Founder © E-Learning
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
