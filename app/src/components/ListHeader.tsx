import React, { useEffect, useState } from "react";
import {
    TableHead,
    TableCell,
    TableRow,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import { IItem } from "../@types/items";

const useStyles = makeStyles(() => createStyles({
    name: {
        cursor: "pointer",
    },
    headerRow: {
        backgroundColor: "aliceblue"
    }
}));

type Props = {
  setItems: (e: IItem[]) => void;
  items: IItem[];
};

const ListHeader: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const [ sort, setSort ] = useState<null | "asc" | "desc">(null);

    const sortItems = () => {
        if (sort === null || sort === "desc") {
            setSort("asc");
        } else {
            setSort("desc");
        }
    };

    useEffect(() => {
        const sortedItems = props.items.sort((a, b) => {
            if (a.name < b.name) {
                return sort === "asc" ? -1 : 1;
            }
            if (a.name > b.name) {
                return sort === "asc" ? 1 : -1;
            }
            return 0;
        });
        props.setItems(sortedItems);
    }, [ sort ]);

    return (
        <TableHead className={classes.headerRow}>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell className={classes.name} onClick={sortItems} align="center">
                    Name{sort && `(${sort})`}
                </TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Status</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ListHeader;
