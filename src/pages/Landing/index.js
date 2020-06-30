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
    <div className={classes.container}>
      <Navbar />
      <div className={clsx(classes.hero, classes.section)} id='hero'>
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
          <Typography variant='subtitle1' className={classes.lowColor}>Introduction</Typography>
          <Typography variant='h3' className={classes.sectionTitle}>Product Designer and Developer</Typography>
          <p className={classes.lowColor}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <DynamicLink text='My Story' icon />
        </div>
      </div>
      <div className={clsx(classes.contact, classes.section)} id='services'>
        <Typography variant='subtitle1' className={classes.lowColor}>Contact</Typography>
        <Typography variant='h3' className={classes.sectionTitle}>Any Type Of Query & Discussion</Typography>
        <p className={classes.lowColor}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        <DynamicLink text='aceveochristian90@gmail.com' icon />
        <div>

        </div>
      </div>
      <div className={classes.hero} id='works'>
        
      </div>
      <div className={classes.hero} id='blog'>
        
      </div>
    </div>
  )
}