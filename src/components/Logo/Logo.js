import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css'

const Logo = () => {
    return (
       
            <Tilt className="ma4 mt0 tilt br2 shadow-2">
                <div className="pa3">
                    <img style={{paddingTop: '5px'}} src={brain} alt="logo" />
                </div>
            </Tilt> 
    )
}

export default Logo