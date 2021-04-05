import React, { useState } from "react";
import {
    Avatar,
    createStyles,
    makeStyles,
    TableRow,
    TableCell,
} from "@material-ui/core";
import { IItem } from "../@types/items";
import Modal from "./Modal";
import SelectComponent from "./SelectComponent";

const useStyles = makeStyles(() => createStyles({
    avatarContainer: {
        display: "flex",
        justifyContent: "center"
    },
    avatar: {
        height: "80px",
        width: "80px",
        cursor: "pointer",
    },
}));
type Props = {
  item: IItem;
  fetchItems: (str: IItem) => void
};

const ListItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
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
                <Avatar
                    onClick={handleOpen}
                    className={classes.avatar}
                    src={props.item.image ? props.item.image : undefined}
                />
            </TableCell>
            <TableCell align="center">{props.item.name}</TableCell>
            <TableCell align="center">{props.item.date}</TableCell>
            <TableCell align="center">
                <SelectComponent fetchItems={props.fetchItems} status={props.item.status} id={props.item.id} />
            </TableCell>
            <Modal
                open={open}
                onClose={handleClose}
                image={props.item.image}
                name={props.item.name}
            />
        </TableRow>
    );
};

export { ListItem };
