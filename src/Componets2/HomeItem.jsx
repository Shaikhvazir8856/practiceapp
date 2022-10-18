import React from 'react';
import {Badge, Button, Card, CardContent, Grid} from "@mui/material"

const HomeItem = ({item}) => {
    return (
        
            <Grid item  xs={3}>
                <Badge badgeContent={item.price} color="secondary">
            <Card >
                <CardContent>
                    <img src={item.image} alt="" width={200} height={250} />
                    <h3>{item.title.substr(0,20)+"..."}</h3>
                    <p>{item.description.substr(0,50)+"..."}</p>
                    <Button variant='contained' >Buy</Button>
                    <Button variant='contained'  >Add To Cart</Button>
                </CardContent>
            </Card>
            </Badge>
            </Grid>
        
    );
};

export default HomeItem;