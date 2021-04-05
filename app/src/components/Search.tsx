import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
  value: string;
  setValue: (e: string) => void;
};
const Search: React.FC<Props> = (props: Props) => {
    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <TextField
            onChange={handleChange}
            value={props.value}
            id="outlined-basic"
            placeholder="Search Item"
            variant="outlined"
        />
    );
};

export default Search;
