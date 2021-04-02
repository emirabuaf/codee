import React from 'react';
import {
    createStyles, Grid, makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderBottom: '1px solid #F1F1F1',
        padding: theme.spacing(2, 1.5),
    },
    text: {
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: theme.typography.fontWeightMedium,
    },
}));

const ListHeader: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={2}>
                <Typography className={classes.text}>ID</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.text}>Image</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.text}>Name</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.text}>Status</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.text}>Date</Typography>
            </Grid>
        </Grid>
    );
};

export default ListHeader;
