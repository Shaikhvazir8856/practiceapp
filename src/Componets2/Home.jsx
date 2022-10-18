import { Button, Grid, TextField } from '@mui/material';
import React,{useState} from 'react';
import axios from 'axios';
import HomeItem from './HomeItem';
const Home = () => {
    const [data,setData]=useState([])
    console.log(data);
    const apiFeatch=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products")
        setData(result.data)
        
    }
    return (
        <div>
            <br /> <br />
           <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField variant='outlined' fullWidth label="Search......."/> 
            </Grid>
            <Grid item xs={4}>
                <Button onClick={apiFeatch} variant='contained' fullWidth>Submit</Button>
            </Grid>
           </Grid>
           <br /> <br />
           <Grid container spacing={2}>
                {
                    data.map((item)=>{
                        return(
                            <HomeItem item={item} />
                        
                        )
                    })
                }
           </Grid>
        </div>
    );
};

export default Home;