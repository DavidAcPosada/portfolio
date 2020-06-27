import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Grold',
        color: theme.palette.primary.main,
        '& > span': {
            fontSize: 20,
            marginRight: theme.spacing(2)
        }
    }
}))