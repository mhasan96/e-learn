import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../images/about.jpg";

const About = () => {
  return (
    <div style={{ marginBottom: "70px" }}>
      <Box sx={{ flexGrow: 1 }} m={2} pt={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="home-intro">
              <h1>What we are</h1>
              <p>
                The e-Learning Center (ELC) assists faculty in the effective use
                of technologies to enhance teaching and learning. Our focus is
                on the good design and effective delivery of fully online
                courses. We provide phone support, small group training, and
                one-on-one consultation to help faculty learn to build appealing
                online courses, develop engaging online teaching methods, and to
                find or create appropriate media and course materials to
                encourage student engagement and success.
              </p>
              <Box sx={{ "& button": { m: 1 } }}>
                <div>
                  <NavLink style={{ textDecoration: "none" }} to="/service">
                    {" "}
                    <Button variant="contained" size="large">
                      View Course
                    </Button>
                  </NavLink>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <img className="fluid-img" src={img} alt="" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
