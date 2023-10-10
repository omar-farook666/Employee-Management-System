import * as React from 'react';
import SideNavBar from '../../Component/SideBar/SideBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Left from './Left';
import Right from './Right';
import Bottom from './Bottom';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 , padding:5}}>
        <h2>Dashboard</h2>
        <Grid container >
          <Grid container xs={12} spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={9}>
            <Left/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
            <Right/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}

export default Dashboard;