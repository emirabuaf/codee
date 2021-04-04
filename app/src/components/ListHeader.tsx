import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

type Props = {
  sortAscending: (e: any) => void;
  sortDescending: (e: any) => void;
};

const ListHeader: React.FC<Props> = (props: Props) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell onClick={props.sortDescending} align="center">Image</TableCell>
                <TableCell onClick={props.sortAscending} align="center">
                    Name
                </TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Status</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default ListHeader;
