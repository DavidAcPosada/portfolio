import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import useStyles from './styles';

export default ({ href = '#', text = '', icon = false }) => {
    const classes = useStyles();

    return (
        <a href={href} className={classes.link}>
            <span>{ text }</span> {icon && <ArrowForwardIcon />}
        </a>
    )
}