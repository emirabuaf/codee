import React, { useState, useEffect, useMemo } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { IItem } from "../@types/items";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";
import Search from "./Search";
import useDebounce from "../hooks/useDebouncedValue";
import Spinner from "./Spinner";

const ItemList: React.FC = () => {
    const [ items, setItems ] = useState<IItem[]>([]);
    const [ value, setValue ] = useState("");
    const [ error, setError ] = useState(false);
    const [ spinner, setSpinner ] = useState(false);
    const debouncedValue = useDebounce<string>(value, 200);

    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            fetch("api/items")
                .then((data) => data.json())
                .then((data) => {
                    if (data.success === false) {
                        setError(data.error);
                    }
                    setItems(data.payload);
                    setSpinner(false);
                });
        }, 1000);
    }, []);

    const fetchItems = (updatedItem: IItem) => {
        const updatedItems = [ ...items ];
        const itemIndex = updatedItems.findIndex((item: IItem) => {
            return item.id === updatedItem.id;
        });
        updatedItems[itemIndex] = updatedItem;

        setItems(updatedItems);
    };

    const filterItems = useMemo(
        () => items
      && items.filter((item: IItem) => {
          return item.name.toLowerCase().includes(debouncedValue.toLowerCase());
      }),

        [ debouncedValue, items ]
    );

    return (
        <TableContainer component={Paper}>
            {!error ? <Search value={value} setValue={setValue} /> : null}
            {!error ? (
                <Table>
                    <ListHeader items={filterItems} setItems={setItems} />
                    <ListBody fetchItems={fetchItems} items={filterItems} />
                </Table>
            ) : (
                <Typography>{error}</Typography>
            )}
            {spinner ? <Spinner /> : null}
        </TableContainer>
    );
};

export default ItemList;
