import React, { useState } from "react";
import {
    Avatar,
    createStyles,
    makeStyles,
    TableRow,
    TableCell,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { format } from "date-fns";
import { IItem } from "../@types/items";
import Modal from "./Modal";
import SelectComponent from "./SelectComponent";

const useStyles = makeStyles(() => createStyles({
    avatarContainer: {
        textAlign: "center",
    },
    avatar: {
        height: "80px",
        width: "80px",
        cursor: "pointer",
        border: "1px solid transparent",
        borderRadius: "50px",
        margin: "0 auto",
    },
}));
type Props = {
  item: IItem;
  fetchItems: (str: IItem) => void;
};

export const formatToDate = (date: Date) => {
    return format(new Date(date), 'dd/MM/yyyy');
};

const ListItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles(props);
    const [ open, setOpen ] = useState(false);

    const formattedDate = formatToDate(props.item.date);

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
                <Paper
                    elevation={0}
                    className={classes.avatarContainer}
                    onClick={handleOpen}
                >
                    {props.item.image ? (
                        <img
                            className={classes.avatar}
                            alt={props.item.name}
                            src={props.item.image ? props.item.image : undefined}
                        />
                    ) : (
                        <Avatar className={classes.avatar} />
                    )}
                </Paper>
            </TableCell>
            <TableCell align="center">{props.item.name}</TableCell>
            <TableCell align="center">{formattedDate}</TableCell>
            <TableCell align="center">
                <SelectComponent
                    fetchItems={props.fetchItems}
                    status={props.item.status}
                    id={props.item.id}
                />
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
