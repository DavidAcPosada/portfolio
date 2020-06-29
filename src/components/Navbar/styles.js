import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    appbar: {
        background: 'transparent',
        boxShadow: 'none',
        padding: `0px ${theme.spacing(10) * 2 }px`,
        paddingTop: theme.spacing(10),
        transition: '.3s ease',
        [theme.breakpoints.down('md')]: {
            padding: `0px ${theme.spacing(5) * 2 }px`,
            paddingTop: theme.spacing(10),
        }
    },
    appBarSolid: {
        padding: `${theme.spacing(2)}px ${theme.spacing(10) * 2 }px`,
        paddingTop: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
        transition: '.3s ease',
        [theme.breakpoints.down('md')]: {
            padding: `0px ${theme.spacing(5) * 2 }px`,
            paddingTop: theme.spacing(3),
        }
    },
    logoContainer: {
        flexGrow: 1,
    },
    logo: {
        width: 70,
        transition: '.3s ease',
        [theme.breakpoints.down('sm')]: {
            width: 60
        }
    },
    logoScroll: {
        width: 55,
        transition: '.3s ease',
        [theme.breakpoints.down('sm')]: {
            width: 45
        }
    },
    overflow: {
        display: 'inline-block',
        overflow: 'hidden',
        transform: 'translateY(-45%)',
        marginLeft: 15,
        [theme.breakpoints.down('sm')]: {
            transform: 'translateY(-65%)',
        }
    },
    name: {
        lineHeight: 1,
        transform: 'translateX(-100%)',
        fontSize: 35,
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        }
    },
    nameScroll: {
        transform: 'translateX(0%)'
    },
    linkContainer: {
        display: 'flex',
    },
    menu: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            position: 'fixed',
            background: theme.palette.common.white,
            width: '100%',
            height: '100vh',
            top: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateX(100%)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.easeInOut
            })
        }
    },
    menuActive: {
        [theme.breakpoints.down('sm')]: {
            transform: 'translateX(0%)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.easeInOut
            })
        }
    },
    close: {
        position: 'absolute',
        color: theme.palette.background.default,
        top: 0,
        right: 0,
        margin: 20,
        cursor: 'pointer'
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `0 ${theme.spacing(3)}px`,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 200,
            padding: theme.spacing(1)
        },
        '&:last-child': {
            paddingRight: 0
        },
        '& > a': {
            textDecoration: 'none',
            color: theme.palette.common.white,
            opacity: 0.3,
            fontSize: 32,
            fontFamily: 'Grold',
            fontWeight: 400,
            lineHeight: 1,
            transition: '.3s ease-out',
            [theme.breakpoints.down('sm')]: {
                color: theme.palette.background.default,
                order: 1,
                marginLeft: 10
            }
        }
    },
    active: {
        '& > a': {
            opacity: 1,
            transition: '.3s ease-out'
        }
    },
    point: {
        background: theme.palette.primary.main,
        width: 7,
        height: 7,
        borderRadius: 100
    },
    burguerButton: {
        display: 'none',
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            display: 'inherit'
        }
    }
}))

export const variants = {
    open: {
        scale: 1,
        y: 0
    },
    closed: {
        scale: 0,
        y: -5
    }
}