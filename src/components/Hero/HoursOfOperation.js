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
        <Box sx={{ marginTop: 2 }}>
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
                       Tel: (201) 945-2011
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default HoursOfOperation;
