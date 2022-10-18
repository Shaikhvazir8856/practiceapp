
import { Button, Grid } from "@mui/material";
import React from "react";

const Navigaition = () => {
  return (
    <div>
        
      <Grid container spacing={1}>
        <Grid item xs={2} >
           <Button variant="contained" fullWidth >Home</Button>
        </Grid>
        <Grid item xs={2} >
           <Button variant="contained"fullWidth >About</Button>
        </Grid>
        <Grid item xs={2} >
           <Button variant="contained"fullWidth >Contact</Button>
        </Grid>
        <Grid item xs={2} >
           <Button variant="contained"fullWidth >Service</Button>
        </Grid>
        <Grid item xs={2} >
           <Button variant="contained"fullWidth >Help</Button>
        </Grid>
        <Grid item xs={2} >
           <Button variant="contained"fullWidth >Login</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navigaition;
