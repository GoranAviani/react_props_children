import React from 'react';
import { useTheme,  } from "../App";

const Description = () => {
const theme = useTheme()
    console.log(theme)
    return(
        <div style={{color: theme.color}}>
        <p>This is a description</p>
        </div>
    )}

export default Description;