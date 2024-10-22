import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles';
import leepicture from '../../assets/leepicture.jpg';
import HoursOfOperation from '../../components/Hero/HoursOfOperation';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(4),
  background: 'rgba(7, 7, 7, 0.7)',
  color: 'rgb(252, 252, 252)',
  borderRadius: 20,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
}));

const AboutUs = () => {
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <LargeAvatar
            alt="Lee Owner Picture"
            src={leepicture}
          />
        }
        title={
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>
              Welcome! My name is Lee and I'm the owner of Lee's Autowerks. My shop specializes in the repair and maintenance of German cars. Our team of experienced technicians is dedicated to providing top-notch service to ensure your vehicle runs smoothly and efficiently.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              We pride ourselves on our attention to detail and commitment to customer satisfaction. Whether you need routine maintenance or complex repairs, we have the expertise and equipment to get the job done right.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Our state-of-the-art facility is equipped with the latest technology to diagnose and repair your vehicle. We use only the highest quality parts and materials to ensure your car performs at its best.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Thank you for choosing Lee's Autowerks. We look forward to serving you and keeping your German car in top condition.
            </Typography>
          </Grid>
          <HoursOfOperation />
        </Grid>
      </CardContent>
      
    </StyledCard>
  );
}

export default AboutUs;
