import React from 'react';
import { Typography } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';
import clsx from 'clsx';

import Navbar from '../../components/Navbar';

import useStyles from './styles'
import DynamicLink from '../../components/DynamicLink';

export default ({  }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.hero}>
        <div className={classes.title}>
          <div className={classes.nameContainer}>
            <Typography variant='h1' className={classes.name}>David <br /> Acevedo.</Typography>
            <div className={classes.append} />
          </div>
          <div >
            <FontAwesome name='github' size='2x' className={classes.socialLink} />
            <FontAwesome name='linkedin' size='2x' className={classes.socialLink} />
            <FontAwesome name='instagram' size='2x' />
          </div>
        </div>
        <div className={classes.introduction}>
          <Typography variant='h6' className={clsx(classes.subtitle, classes.lowColor)}>Introduction</Typography>
          <Typography variant='h3' className={classes.role}>Product Designer and Developer</Typography>
          <p className={classes.lowColor}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <DynamicLink />
        </div>
      </div>
      <div className={classes.hero} id='services'>
        
      </div>
      <div className={classes.hero} id='works'>
        
      </div>
      <div className={classes.hero} id='blog'>
        
      </div>
    </div>
  )
}