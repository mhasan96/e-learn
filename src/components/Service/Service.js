import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import useProducts from "../../Hooks/useProducts";
import "./Service.css";
// import useProducts from "../../Hooks/useProducts";

const Service = () => {
  //Trailer Video Modal
  //*************
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //*********** */
  //Getting all the products from JSON file
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/fakeDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Main Div File
  return (
    <div className="card-container">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Watch Trail Video"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Cxf5sOXG0w0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ textAlign: "center" }}>
        <h1>Our Courses</h1>
        <br />
      </div>
      <div>
        {/* Showing the file */}
        <Grid container spacing={3} style={{ paddingLeft: "10px" }}>
          {products.map((product) => (
            <Grid key={product?.id} item md={3}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="150"
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
                    Price: ${product?.price}
                    <hr />
                  </Typography>
                  Duration: {product?.duration}
                </CardContent>
                <CardActions style={{ marginBottom: "15px" }}>
                  <NavLink
                    style={{ textDecoration: "none", marginRight: "10px" }}
                    to="/enroll"
                  >
                    {" "}
                    <Button variant="outlined" size="small">
                      Enroll
                    </Button>{" "}
                  </NavLink>
                  <Button
                    onClick={handleClickOpen}
                    size="small"
                    variant="outlined"
                  >
                    Trail Now
                  </Button>
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
