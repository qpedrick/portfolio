import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilePresentRoundedIcon from '@mui/icons-material/FilePresentRounded';
import Pdf from './images/Quinton-Ulysses-Pedrick-Resume-PDF.pdf'


export default class Header extends React.Component {
    render(){
        return (
            <Box
            sx={{ 
                diaplay: 'flex',
                flexGrow: 1
                }}>
                <AppBar position="sticky" style={{background: 'black'}}>
                    <Toolbar sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Typography variant= 'h6'fontFamily={'Courier New'} x={{display: 'flex', justifySelf: 'flex-start'}}>
                        Quinton Ulysses Pedrick
                        </Typography>
                        <Box sx={{display: 'flex', justifySelf: 'flex-end'}}>
                            <IconButton href='https://github.com/qpedrick' target={'_blank'} sx={{display: 'flex', background: 'white', m: 1}}>
                                <GitHubIcon />
                            </IconButton>
                        <IconButton href='https://www.linkedin.com/in/quintonpedrick' target={'_blank'} sx={{display: 'flex', background: 'white', m: 1}}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href={Pdf} target={'_blank'} tooltip='Resume' sx={{display: 'flex', background: 'white', m: 1}}>
                            <FilePresentRoundedIcon />
                        </IconButton>
                        {/* <IconButton sx={{display: 'flex', background: 'white', m: 1}}>
                            <MenuIcon/>
                        </IconButton> ---> Not needed currently */}
                        </Box>
                    </Toolbar>
                </AppBar>
                </Box>
            );
        }
}
