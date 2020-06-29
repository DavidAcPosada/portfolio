import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    hero: {
        width: '100%',
        height: '100vh',
        color: theme.palette.common.white,
        padding: `0px ${theme.spacing(10) * 2 }px`,
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            padding: `0px ${theme.spacing(5) * 2 }px`,
            paddingTop: theme.spacing(15) * 2
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
        '& > *': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    nameContainer: {
        marginBottom: theme.spacing(15),
    },
    name: {
        fontSize: 130,
        lineHeight: '90px',
        [theme.breakpoints.down('sm')]: {
            fontSize: 115,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 95,
            lineHeight: '70px'
        }
    },
    append: {
        width: 100,
        height: 10,
        background: theme.palette.primary.main,
        borderRadius: 10
    },
    socialLink: {
        paddingRight: theme.spacing(4)
    },
    title: {
        flex: 2,
        paddingTop: theme.spacing(5)
    },
    introduction: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(20),
    },
    lowColor: {
        color: 'rgba(255, 255, 255, 0.6)',
    },  
    subtitle: {
        fontFamily: '"Roboto Mono", monospace',
        fontSize: 18,
        '&::before': {
            content: '"-"',
            marginRight: theme.spacing(2),
            fontSize: 20
        }
    },
    role: {
        fontSize: 38,
        lineHeight: '38px',
        padding: `${theme.spacing(3)}px 0`
    }
}))