import React from "react";
import { Box } from "@mui/system";
import Skills from "./Skills";


export default function About() {
    return(
        <Box>
        <Box>
            <h3>
                About Me
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis placeat possimus perspiciatis ratione, magnam, nostrum voluptas itaque repellendus, illo consequuntur nobis temporibus magni aspernatur sint inventore doloremque vel soluta!
            </p>
        </Box>
            <Skills />
        </Box>
    )
}