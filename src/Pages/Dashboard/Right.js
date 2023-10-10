import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from './work.png';
import Icon from './Icon.svg';
import Topbox from './Topbox';
import { Application } from './Application';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Right = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Application/>
      </Grid>
      <Grid item xs={12}>
        <Item>
        <h5>Upcomming Interviews</h5>
        <hr/>
          <Topbox/>
        </Item>
      </Grid>
    </Grid>
  )
}

export default Right
