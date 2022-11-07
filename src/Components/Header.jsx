import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Header() {
return (
    <Box
    sx={{ 
        diaplay: 'flex',
        flexGrow: 1
        }}>
        <AppBar position="static" style={{background: 'black'}}>
            <Toolbar sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography sx={{display: 'flex', justifySelf: 'flex-start', font: ''}}>
                Quinton Ulysses Pedrick
                </Typography>
                <Box sx={{display: 'flex', justifySelf: 'flex-end'}}>
                <IconButton sx={{display: 'flex', background: 'white', m: 1}}>
                    <GitHubIcon />
                </IconButton>
                <IconButton sx={{display: 'flex', background: 'white', m: 1}}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton sx={{display: 'flex', background: 'white', m: 1}}>
                    <MenuIcon/>
                </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
