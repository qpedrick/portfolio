import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';


export default class Footer extends Component {
    render() {
        return(
            <Box sx={{justifyContent: 'center',alignContent: 'center'}}>
                <Typography sx={{fontFamily: 'Courier New'}}>Designed and Built by Quinton Ulysses Pedrick</Typography>
                <CopyrightIcon/>
                <Typography sx={{fontFamily: 'Courier New', alignItems: 'center'}}>2022</Typography>
            </Box>
        )
    }
}