import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../../src/images/e-learning.png";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/homedb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Box sx={{ flexGrow: 1 }} m={2} pt={3}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="home-intro">
              <h1>
                <span style={{ color: "rgb(0, 119, 255)" }}>E-</span>
                Learning
              </h1>
              <p>
                E-learning means learning online through content or video
                lesson. It is the modern education system of electronics
                technology is called electronic learning or e-learning. The
                development of technology around the world has touched the
                education system.
              </p>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <img className="fluid-img" src={img} alt="" />
            </div>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{ background: "lightGray", padding: "20px", marginTop: "50px" }}
      >
        <div className="middle-home">
          <h1>Welcome</h1>
          <p>
            E-learning, or electronic learning, is the delivery of learning and
            training through digital resources. Although eLearning is based on
            formalized learning, it is provided through electronic devices such
            as computers, tablets and even cellular phones that are connected to
            the internet. This makes it easy for users to learn anytime,
            anywhere, with few, if any, restrictions. Basically, eLearning is
            training, learning, or education delivered online through a computer
            or any other digital device.
          </p>
        </div>
      </div>
      <div>
        <h1 className="middle-home">Our Top Rated Course</h1>
      </div>
      <div>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={3} key={product?.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product?.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.course}
                  </Typography>
                  <Typography gutterBottom variant="p" component="div">
                    Instructor: {product?.instructor}
                    <hr />
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Price:$ {product?.price}
                    <hr />
                  </Typography>
                  Duration: {product?.duration}
                </CardContent>
                <CardActions>
                  <NavLink style={{ textDecoration: "none" }} to="/enroll">
                    {" "}
                    <Button size="small">Enroll</Button>{" "}
                  </NavLink>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="middle-home">
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <NavLink style={{ textDecoration: "none" }} to="/service">
                {" "}
                <Button variant="contained" size="large">
                  View More
                </Button>
              </NavLink>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;
