import React from "react";
import { Grid } from "@mui/material";
import ReactCurvedText from "react-curved-text"
import { maxWidth, width } from "@mui/system";
import { WidthFull } from "@mui/icons-material";


export default function About() {
    return(
        <Grid container>
            <Grid item sx={{margin: "auto"}} sm={12} md={6}>
                <Grid item sx={{fontFamily: "fantasy", fontSize: "5vh", textAlign: "left", marginLeft: "15vw"}}><h1>Quinton</h1></Grid>
                <Grid item sx={{fontFamily: "fantasy", fontSize: "5vh", textAlign: "left", marginLeft: "20vw"}}><h1>Ulysses</h1></Grid>
                <Grid item sx={{fontFamily: "fantasy", fontSize: "5vh", textAlign: "left", marginLeft: "25vw"}}><h1>Pedrick</h1></Grid>
            </Grid>
            <Grid item sm={12} md={6}>
                <Grid item>
                <ReactCurvedText
                    width={300}
                    height={300}
                    cx={150}
                    cy={150}
                    rx={100}
                    ry={100}
                    textProps={{style: {
                        fontSize: "26px"}
                        }}
                    startOffset={0}
                    text="How Can I Help? * How Can I Help? * How Can I Help? *"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}