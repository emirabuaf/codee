import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

type ModalProps = {
    open:boolean,
    onClose: (e:any) => void,
    name: string
}

const ImageModal: React.FC<ModalProps> = (props:ModalProps) => {
    const classes = useStyles();
    const [ modalStyle ] = useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <img alt={props.name} />
        </div>
    );

    return (
        <Modal open={props.open} onClose={props.onClose}>
            {body}
        </Modal>
    );
};

export default ImageModal;
