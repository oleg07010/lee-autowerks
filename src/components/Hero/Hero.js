import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import porsche from './Porsche.png'; // Ensure the image path is correct
import './Hero.css'; // Link to your CSS file
import HoursOfOperation from './HoursOfOperation'; // Import the new component

const Hero = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Grid container spacing={0} alignItems="center" className="hero-container">
                {/* Left column: Text and Hours of Operation */}
                <Grid item xs={12} md={6}>
                    <div className="text-container">
                        <h1 className="text-h1">WE REPAIR GERMAN CARS</h1>
                        <h2 className="text-h2">THE RIGHT WAY</h2>
                        <h3 className="text-h3">THE FIRST TIME</h3>
                        <a href="tel:201-945-2011" className="hero-button">Book an appointment</a>
                        <HoursOfOperation /> 
                    </div>
                </Grid>

                {/* Right column: Image */}
                <Grid item xs={12} md={6}>
                    <div className="image-container">
                        <img src={porsche} alt="Porsche" className="hero-image" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
