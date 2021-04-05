import React, { useState } from "react";
import {
    Avatar,
    createStyles,
    makeStyles,
    TableRow,
    TableCell
} from "@material-ui/core";
import { IItem } from "../@types/items";
import Modal from './Modal';

const useStyles = makeStyles(() => createStyles({
    avatarContainer: {
        display: "flex",
        justifyContent: "center",
    },
    avatar: {
        height: "80px",
        width: "80px",
        cursor: "pointer"
    },
}));
type Props = {
  item: IItem;
};

const ListItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <TableRow key={props.item.id}>
            <TableCell>{props.item.id}</TableCell>
            <TableCell className={classes.avatarContainer}>
                <Avatar onClick={handleOpen} className={classes.avatar} />
            </TableCell>
            <TableCell align="center">{props.item.name}</TableCell>
            <TableCell align="center">{props.item.date}</TableCell>
            <TableCell align="center">{props.item.status}</TableCell>
            <Modal open={open} onClose={handleClose} image={props.item.image} name={props.item.name} />
        </TableRow>
    );
};

export { ListItem };
