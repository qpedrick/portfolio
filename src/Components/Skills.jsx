import * as React from "react";
import { Box } from "@mui/system";
import HtmlIcon from '@mui/icons-material/Html';
import IconButton from '@mui/material/IconButton';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';



export default class Skills extends React.Component {
    render() {
        return(
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
                <IconButton sx={{background: 'black'}}>
                    <HtmlIcon sx={{color: 'white'}} fontSize="large"/>
                </IconButton>
                <IconButton sx={{background: 'black'}}>
                    <CssIcon sx={{color: 'white'}} fontSize="large"/>
                </IconButton>
                <IconButton sx={{background: 'black'}}>
                    <JavascriptIcon sx={{color: 'white'}} fontSize="large"/>
                </IconButton>
            </Box>
        )
    }
}