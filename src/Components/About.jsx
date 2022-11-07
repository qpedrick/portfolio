import React from "react";
import { Box } from "@mui/system";

//Scrapped for now
//import Skills from "./Skills"; 



export default function About() {
    return(
        <Box sx={{display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>
        <Box sx={{justifySelf:'flex-start'}}>
            <h1 style={{fontFamily:'Courier New'}}>
                How can I help?
            </h1>
        </Box>
        <Box sx={{}}>
            <p style={{fontFamily:'Courier New', textAlign:'right'}}>
                I am a Full-Stack Web Development graduate of <a href="https://elevenfifty.org" target={'_blank'}>Eleven Fifty Academy</a> of Indianapolis, IN.
                Eleven Fifty Academy taught me the fundamentals of HTML, CSS, JavaScript, React, and more.  
                I am looking to build on this foundation and use my previous skills and experience in hotel management to work on impactful teams with a customer-centric mindset.
            </p>
        </Box>
        {/* <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <Skills />
        </Box>*/}
        </Box>
    )
}