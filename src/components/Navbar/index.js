import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import logo from './../../utils/assets/images/logo.svg'
import { motion } from 'framer-motion';
import Scrollspy from 'react-scrollspy';
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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

export default () => {
    const classes = useStyles()
    const [current, setCurrent] = useState('none')
    const [scrollValue, setScrollValue] = useState(0);
    const [active, setActive] = useState(false);

    const handleUpdate = (e) => setCurrent(e ? e.id : 'none');

    const appBarClasses = clsx({
        [classes.appbar]: true,
        [classes.appBarSolid]: scrollValue > 100
    });

    const logoClasses = clsx({
        [classes.logo]: true,
        [classes.logoScroll]: scrollValue > 100
    })

    const nameClasses = clsx({
        [classes.name]: true,
        [classes.nameScroll]: scrollValue > 300
    })

    const menuClasses = clsx({
        [classes.menu]: true,
        [classes.menuActive]: active
    })

    useEffect(() => {
        const scrollEvent = document.addEventListener('scroll', () => setScrollValue(window.scrollY));
        const pressKeyEvent = document.addEventListener('keypress', (e) => e.code === 'Escape' && setActive(false))
        return () => {
            document.removeEventListener(scrollEvent)
            document.removeEventListener(pressKeyEvent)
        }
    }, [])

    const buildLinks = () => links.map(item => {
        const linkClasses = clsx({
            [classes.link]: true,
            [classes.active]: current === item.id
        })
        return (
            <li key={item.id} className={linkClasses} onClick={() => setActive(false)}>
                <a href={`#${item.id}`} data-scroll>{ item.title }</a>
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
        )
    })

    return (
        <AppBar position='fixed' className={appBarClasses}>
            <Toolbar>
                <a className={classes.logoContainer} href='#hero'>
                    <img src={logo} className={logoClasses} alt='logo' />
                    <div className={classes.overflow}>
                        <Typography variant='h3' className={nameClasses}>David Acevedo</Typography>
                    </div>
                </a>
                <div>
                    <Scrollspy 
                        items={['services', 'works', 'blog']}
                        className={classes.linkContainer}
                        onUpdate={handleUpdate}
                    >
                        <Fab className={classes.burguerButton} size='medium' onClick={() => setActive(true)}>
                            <MenuIcon />
                        </Fab>
                        <div className={menuClasses}>
                            <span className={classes.close}>
                                <CloseIcon fontSize='large' onClick={() => setActive(false)} />
                            </span>
                            {buildLinks()}
                        </div>
                    </Scrollspy>
                </div>
            </Toolbar>
        </AppBar>
    )
}