import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from './../../utils/assets/images/logo.svg'
import { motion } from 'framer-motion';
import Scrollspy from 'react-scrollspy';

import useStyles, { variants } from './styles'

const links = [
    {
        id: 'services',
        title: 'Services'
    },
    {
        id: 'works',
        title: 'Works'
    },
    {
        id: 'blog',
        title: 'Blog'
    }
]

export default ({  }) => {
    const classes = useStyles()
    const [current, setCurrent] = useState('none')

    const handleUpdate = (e) => setCurrent(e ? e.id : 'none')

    return (
        <AppBar position='fixed' className={classes.appbar}>
            <Toolbar>
                <div className={classes.logoContainer}>
                    <img src={logo} className={classes.logo} />
                </div>
                <div>
                    <Scrollspy 
                        items={['services', 'works', 'blog']}
                        currentClassName={classes.active}
                        className={classes.linkContainer}
                        onUpdate={handleUpdate}
                    >
                        {links.map(item => (
                            <li key={item.id} className={classes.link}>
                                <a href={`#${item.id}`}>{ item.title }</a>
                                <motion.span 
                                    animate={current === item.id ? 'open' : 'closed'}
                                    variants={variants}
                                    className={classes.point}
                                    transition={{
                                        type: "spring",
                                        damping: 10,
                                        stiffness: 100
                                    }}
                                />
                            </li>
                        ))}
                    </Scrollspy>
                </div>
            </Toolbar>
        </AppBar>
    )
}