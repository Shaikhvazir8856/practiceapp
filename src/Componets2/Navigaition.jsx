
import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navigaition = () => {
  return (
    <div>
        <br /> 
      <Grid container spacing={1}>
        <Grid item xs={2} >
            <Link to="/home">
           <Button variant="contained" fullWidth >Home</Button>
           </Link>
        </Grid>
        <Grid item xs={2} >
            <Link to="about">
           <Button variant="contained"fullWidth >About</Button>
           </Link>
        </Grid>
        <Grid item xs={2} >
            <Link to="contact">
           <Button variant="contained"fullWidth >Contact</Button>
           </Link> 
        </Grid>
        <Grid item xs={2} >
            <Link to="service">
           <Button variant="contained"fullWidth >Service</Button>
           </Link>
        </Grid>
        <Grid item xs={2} >
            <Link to="help">
           <Button variant="contained"fullWidth >Help</Button>
           </Link>
        </Grid>
        <Grid item xs={2} >
            <Link to="login">
           <Button variant="contained"fullWidth >Login</Button>
           </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigaition;
