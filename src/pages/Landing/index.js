import React from 'react';
import { Typography } from '@material-ui/core';
import Navbar from '../../components/Navbar';

import useStyles from './styles'

export default ({  }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.hero}>
        <Typography variant='h1'>David <br /> Acevedo.</Typography>
      </div>
      <div className={classes.hero} id='services'>
        Texto 
      </div>
      <div className={classes.hero} id='works'>
        Texto 
      </div>
      <div className={classes.hero} id='blog'>
        <Typography variant='h1'>David <br /> Acevedo.</Typography>
        Texto
      </div>
    </div>
  )
}