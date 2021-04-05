import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

import { IItem } from "../@types/items";

const useStyles = makeStyles<Theme, SelectProps>((theme) => createStyles({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    status: {
        backgroundColor: (props) => (props.status === "new"
            ? "#4791db"
            : props.status === "processing"
                ? "##ffb74d"
                : props.status === "done"
                    ? "#81c784"
                    : "#e57373"),
        width: "150px",
        padding: "10px",
        color: '#fff'
    },
}));

type SelectProps = {
  id: number;
  status: string;
  fetchItems: (str: IItem) => void;
};

const SelectComponent: React.FC<SelectProps> = (props: SelectProps) => {
    const classes = useStyles(props);
    const [ newStatus, setStatus ] = useState("");

    const { id, status } = props;

    const handleChange = (e) => {
        setStatus(e.target.value);
        fetch(`api/items/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: e.target.value }),
        })
            .then((data) => data.json())
            .then((data) => {
                props.fetchItems(data.payload);
            });
    };

    return (
        <FormControl className={classes.formControl}>
            <NativeSelect
                defaultValue={newStatus}
                value={status}
                onChange={handleChange}
                className={classes.status}
            >
                <option value="new">New</option>
                <option value="processing">Processing</option>
                <option value="error">Error</option>
                <option value="done">Done</option>
            </NativeSelect>
        </FormControl>
    );
};

export default SelectComponent;
