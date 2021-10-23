
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const {title,info,open,handleClose} = props;

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className = "alert-modal">
                <DialogTitle id="simple-dialog-title" className = "alert-title">{title}</DialogTitle>
                <div className = "alert-info">{info}</div>
            </div>
        </Dialog>
        )
}