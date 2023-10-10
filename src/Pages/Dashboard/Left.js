import { Grid,Paper } from '@mui/material';
import React from 'react';
import EmployeeInfo from './EmployeeInfo';
import { styled } from '@mui/material/styles';
import TopHiringSources from './TopHiringSources';
import EmployeesAvailability from './EmployeesAvailability';
import TotalEmployees from './TotalEmployees';
import Other from './other';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Left = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Item>
            <h5>Employee Info</h5>
              <EmployeeInfo/>
            </Item>
        </Grid>
        <Grid item xs={12}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <Item>
            <h5>Employees Availability</h5>
              <EmployeesAvailability/>
            </Item>
        </Grid>
        <Grid item xs={6} >
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
              <h5>Total Employees</h5>
              <TotalEmployees/>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
              <h5>Others</h5>
               <Other/>
              </Item>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
        
        <Grid item xs={12} >
            <Item>
            <h5>Top Hiring Sources</h5> 
              <TopHiringSources/>
            </Item>
        </Grid>

    </Grid>
  )
}

export default Left
