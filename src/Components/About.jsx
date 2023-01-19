import React from "react";
import { Box } from "@mui/system";

//Scrapped for now
//import Skills from "./Skills"; 



export default function About() {
    return(
        <Box sx={{display:'flex', flexDirection:'column'}}>
        <Box sx={{justifySelf:'flex-start'}}>
            <h1 style={{fontFamily:'Courier New', textAlign: 'right'}}>
                How can I help?
            </h1>
        </Box>
        <Box sx={{}}>
            <p style={{fontFamily:'Courier New', textAlign:'justify'}}>
                I am a Full-Stack Web Developer who is a graduate of <a href="https://elevenfifty.org" rel='noreferrer' target={'_blank'}>Eleven Fifty Academy</a>.
                <br />
                Eleven Fifty Academy taught me the fundamentals of HTML, CSS, JavaScript, React, and more.
                <br />  
                I am looking to build on this foundation while using my previous skills and experience in hotel management
                <br />
                to work on impactful teams with a customer-centric mindset.
            </p>
        </Box>
        {/* <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <Skills />
        </Box>*/}
        </Box>
    )
}