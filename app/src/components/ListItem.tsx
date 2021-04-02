import React from 'react';
import {
    Avatar, createStyles, Grid, makeStyles, Typography
} from '@material-ui/core';
import { IItem } from "../@types/items";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        borderBottom: '1px solid #F1F1F1',
        padding: theme.spacing(3, 1.5, 2.25),
        alignItems: "center",
    },
    text: {
        fontWeight: theme.typography.fontWeightLight,
    },
    avatar: {
        height: "80px",
        width: "80px"
    }
}));
type Props = {
    item: IItem
}

const ListItem: React.FC<Props> = (props:Props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={2}>
                <Typography className={classes.text}>{props.item.id}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Avatar className={classes.avatar} />
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.text}>{props.item.name}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.text}>{props.item.status}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.text}>{props.item.date}</Typography>
            </Grid>
        </Grid>
    );
};

export { ListItem };
