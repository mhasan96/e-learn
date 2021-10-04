import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import useProducts from "../../Hooks/useProducts";
import "./Service.css";
// import useProducts from "../../Hooks/useProducts";

const Service = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/fakeDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="card-container">
      <div style={{ textAlign: "center" }}>
        <h1>Our Courses</h1>
        <br />
      </div>
      <div>
        <Grid container spacing={3} style={{ paddingLeft: "10px" }}>
          {products.map((product) => (
            <Grid key={product?.id} item md={3}>
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
      </div>
    </div>
  );
};

export default Service;
