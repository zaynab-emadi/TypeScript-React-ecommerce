import React from 'react';
import ImgElement from '../../Assets/Images/page not found.jpg';
import Box from "@mui/material/Box";
import {Button, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    return (
        <>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx = {{backgroundColor : '#1F1D28' , height : '100vh'}}
            >
            <Box src={ImgElement} component={'img'} />
                <Button variant="text" sx = {{color : '#E3FFE7'}} size="large" onClick={() => navigate('/')} >Return</Button>
            </Grid>
        </>
    );
}

export default PageNotFound;