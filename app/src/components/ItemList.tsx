import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { IItem } from "../@types/items";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";
import Search from "./Search";
import useDebounce from '../hooks/useDebouncedValue';

const ItemList: React.FC = () => {
    const [ items, setItems ] = useState<IItem[]>([]);
    const [ value, setValue ] = useState("");
    const debouncedValue = useDebounce<string>(value, 200);

    useEffect(() => {
        fetch("api/items")
            .then((data) => data.json())
            .then((data) => {
                setItems(data.payload);
            });
    //   .catch((error) => console.log(error));
    }, []);

    const filterItems = items.filter((item: IItem) => {
        return item.name.toLowerCase().includes(debouncedValue.toLowerCase());
    });

    const sortAscending = () => {
        const ascendingItems = items.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        setItems(ascendingItems);
    };

    const sortDescending = () => {
        const descendingItems = items.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
        setItems(descendingItems);
    };

    return (
        <TableContainer component={Paper}>
            <Search value={value} setValue={setValue} />
            <Table>
                <ListHeader
                    sortDescending={sortDescending}
                    sortAscending={sortAscending}
                />
                <ListBody items={filterItems} />
            </Table>
        </TableContainer>
    );
};

export default ItemList;
