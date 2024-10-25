import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const HoursOfOperation = () => {
    const hours = [
        { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 3:00 PM' },
        { day: 'Sunday', time: 'Closed' },
    ];

    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" component="h4" gutterBottom>
                Hours of Operation
            </Typography>
            {hours.map((item, index) => (
                <Typography key={index} variant="body2">
                    {item.day}: {item.time}
                </Typography>
                
            ))}
            <Box sx={{ paddingTop: '20px' }}>
                <Typography variant="body2">
                    <Link href="tel:201-945-2011" sx={{ color: 'white', textDecoration: 'none' }}>
                        (201) 945-2011
                    </Link>
                </Typography>
            </Box>
            <Box sx={{ paddingTop: '10px' }}>
                <Typography variant="body2">
                    <Link href="https://maps.app.goo.gl/VXV5yeQ5CZ5T3RHi7" sx={{ color: 'white', textDecoration: 'none' }}>
                        295 Bergen Turnpike Suite K, Ridgefield Park, NJ
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default HoursOfOperation;
