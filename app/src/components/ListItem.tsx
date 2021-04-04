import React from "react";
import {
    Avatar,
    createStyles,
    makeStyles,
    TableRow,
    TableCell
} from "@material-ui/core";
import { IItem } from "../@types/items";

const useStyles = makeStyles(() => createStyles({
    avatarContainer: {
        display: "flex",
        justifyContent: "center",
    },
    avatar: {
        height: "80px",
        width: "80px",
    },
}));
type Props = {
  item: IItem;
};

const ListItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return (
        <TableRow key={props.item.id}>
            <TableCell>{props.item.id}</TableCell>
            <TableCell className={classes.avatarContainer}>
                <Avatar className={classes.avatar} />
            </TableCell>
            <TableCell align="center">{props.item.name}</TableCell>
            <TableCell align="center">{props.item.date}</TableCell>
            <TableCell align="center">{props.item.status}</TableCell>
        </TableRow>
    );
};

export { ListItem };
