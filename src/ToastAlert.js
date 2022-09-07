import React, {useState, forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToastAlert(props) {
    const [open, setOpen] = useState(!!props.open);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={props.autoHideDuration || 3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.severity} sx={{width: '100%'}}>
                This is a success message!
            </Alert>
        </Snackbar>
    );
};