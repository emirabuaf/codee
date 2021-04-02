import React from "react";
import { Box } from "@material-ui/core";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";

const ItemList: React.FC = () => {
    return (
        <Box>
            <ListHeader />
            <ListBody />
        </Box>
    );
};

export default ItemList;
