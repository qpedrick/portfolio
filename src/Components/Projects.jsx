import { Box } from "@mui/system";
import React, { Component } from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Typography, } from "@mui/material";

export default class Projects extends Component {
    render() {
        return(
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'space-evenly', background:'black'}}>
                <Card sx={{ maxWidth: 345, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={require('./images/SpeakEasyHeroku.jpg')}
                        alt="Capstone Project for Eleven Fifty Academy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Full Stack Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This was my final project for Eleven Fifty Academy.  Features different user roles and permissions, a shared job board and message board both with full CRUD depending on permissions, and a database with encrypted passwords. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://speakeasyclient.herokuapp.com" target={'_blank'}>
                        <Button size="small">Visit</Button>
                        </a>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={require('./images/BudgetHeroku.png')}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Team Budget Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This was a group project that allows you to set an estimated budget and compare against the actual values accrued.  This project helped me to learn more about working with git in a team setting and also managing our processes to be efficient.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://efa112clientbudgetapp.herokuapp.com" target={'_blank'}>
                            <Button size="small">Visit</Button>
                        </a>
                    </CardActions>
                </Card>
            </Box>
        )
    }
}