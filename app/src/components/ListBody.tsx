import React from "react";
import { TableBody } from "@material-ui/core";
import { ListItem } from "./ListItem";
import { IItem } from "../@types/items";

type Props = {
  items: IItem[];
};

const ListBody: React.FC<Props> = (props: Props) => {
    return (
        <TableBody>
            {props.items && props.items.map((item) => (
                <ListItem item={item} key={item.id} />
            ))}
        </TableBody>
    );
};

export default ListBody;
