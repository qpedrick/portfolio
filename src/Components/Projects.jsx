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
                        <a href="https://github.com/qpedrick/EFA112_BudgetApp_Client" rel='noreferrer' target={'_blank'}>
                        <Button size="small">Visit Client Code Repo</Button>
                        </a>
                        <a href="https://github.com/qpedrick/EFA112_BudgetApp_Server" rel='noreferrer' target={'_blank'}>
                        <Button size="small">Visit Server Code Repo</Button>
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
                        <a href="https://github.com/qpedrick/RedBadge-SpeakEasyClient" rel='noreferrer' target={'_blank'}>
                            <Button size="small">Visit Client Code Repo</Button>
                        </a>
                        <a href="https://github.com/qpedrick/RedBadge-SpeakEasyServer" rel='noreferrer' target={'_blank'}>
                            <Button size="small">Visit Server Code Repo</Button>
                        </a>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={require('./images/24HR-GroupProject.png')}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Team 24 Hour API Project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        This was a group frontend project that was done in 24 hours and incorporated 3rd third party APIs. The main objective in this project was to work with a small group on a tight deadline to complete a project by splitting tasks, working with git, and merging individual contributions. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href="https://github.com/qpedrick/EFA112-24HR-Group1-Project" rel='noreferrer' target={'_blank'}>
                            <Button size="small">Visit Client Code Repo</Button>
                        </a>
                    </CardActions>
                </Card>
            </Box>
        )
    }
}