import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Box, Typography, TextField, Button, CircularProgress} from '@mui/material';
import {updateDB, updateUserEmail} from '../databaseActions';
import {setUser} from '../reducers/userSlice';
import ToastAlert from './ToastAlert';
import {mainViewStyles, inputStyles} from '../styles/layoutStyles';

export default function UserProfileEditor() {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [email, setEmail] = useState(user.email || "");
    const [updating, setUpdating] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [errorAlertOpen, setErrorAlertOpen] = useState(false);

    const dispatch = useDispatch();

    const updateUserData = () => {
        return updateDB(`users/${user.uid}`, {
            firstName,
            lastName,
            email
        }).then(() => {
            dispatch(setUser({
                uid: user.uid,
                firstName,
                lastName,
                email
            }));

            setUpdating(false);
            setSuccessAlertOpen(true);
        }).catch(e => {
            setUpdating(false);
            setErrorAlertOpen(true);
            console.error(e);
        });
    };

    const saveProfileChanges = () => {
        setUpdating(true);

        updateUserEmail(email).then(() => {
            updateUserData();
        }).catch(e => {
            console.error(e);
            updateUserData();
        });
    };

    return (
        <Box sx={mainViewStyles}>
            <Typography sx={inputStyles}>My Profile</Typography>

            <TextField
                label="First Name"
                value={firstName}
                sx={inputStyles}
                onChange={(e) => setFirstName(e.target.value)} />

            <TextField
                label="Last Name"
                value={lastName}
                sx={inputStyles}
                onChange={(e) => setLastName(e.target.value)} />

            <TextField
                label="Email"
                value={email}
                sx={inputStyles}
                onChange={(e) => setEmail(e.target.value)} />

            {
                updating ?
                    <CircularProgress />
                    :
                    <Button variant="contained" onClick={saveProfileChanges}>Save Changes</Button>
            }

            <ToastAlert open={successAlertOpen} openStateChanger={setSuccessAlertOpen} severity="success" />
            <ToastAlert open={errorAlertOpen} openStateChanger={setErrorAlertOpen} severity="error" />
        </Box>
    );
};