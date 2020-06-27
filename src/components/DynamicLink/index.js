import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles';

export default () => {
    const classes = useStyles();

    return (
        <a href='#' className={classes.link}>
            <span>My Story</span> <ArrowForwardIcon />
        </a>
    )
}