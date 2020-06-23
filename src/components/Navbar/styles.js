import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    appbar: {
        background: 'transparent',
        boxShadow: 'none',
        padding: `0px ${theme.spacing(10) * 2 }px`,
        paddingTop: theme.spacing(10)
    },
    logoContainer: {
        flexGrow: 1
    },
    logo: {
        width: 70
    },
    linkContainer: {
        display: 'flex'
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `0 ${theme.spacing(3)}px`,
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
            transition: '.3s ease-out'
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