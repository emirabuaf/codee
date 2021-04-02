import React, { useState, useEffect } from 'react';
import { Box, createStyles, makeStyles } from '@material-ui/core';
import { ListItem } from './ListItem';
import { IItem } from "../@types/items";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: 'calc(100% - 49px)',
        overflowY: 'scroll',
    },
    listItem: {
        borderBottom: '1px solid #F1F1F1',
        padding: theme.spacing(2, 1.5),
    },
}));

const ListBody: React.FC = () => {
    const classes = useStyles();

    const [ items, setItems ] = useState<IItem[]>([]);

    useEffect(() => {
        fetch("api/items")
            .then((data) => data.json())
            .then((data) => {
                setItems(data.payload);
            });
    }, []);

    return (
        <Box className={classes.root}>
            {items && items.map((item) => <ListItem item={item} key={item.id} />)}
        </Box>
    );
};

export default ListBody;
