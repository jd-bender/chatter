import React, {useState, forwardRef, useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastAlert(props) {
    const [open, setOpen] = useState(!!props.open);

    useEffect(() => {
        setOpen(!!props.open);
    }, [props.open]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        props.openStateChanger(false);
    };

    let alertMessage;

    switch (props.severity) {
        case "success":
            alertMessage = "Saved successfully";
            break;
        case "error":
            alertMessage = "Something went wrong";
            break;
    }

    return (
        <Snackbar open={open} autoHideDuration={props.autoHideDuration || 3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity} sx={{width: '100%'}}>
                {alertMessage}
            </Alert>
        </Snackbar>
    );
};