import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
return (
    <Box
    sx={{ 
        diaplay: 'flex',
        flexGrow: 1
        }}>
        <AppBar position="static">
            <Toolbar sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography sx={{display: 'flex', justifySelf: 'flex-start'}}>
                Quinton Ulysses Pedrick
                </Typography>
                <IconButton sx={{display: 'flex', justifySelf: 'flex-end'}}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
