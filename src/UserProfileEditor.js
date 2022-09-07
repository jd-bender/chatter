import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box, Typography, TextField, Button} from '@mui/material';
import {updateEmail} from 'firebase/auth';
import {update, ref} from 'firebase/database';
import {database as db, auth} from './firebase';
import {mainViewStyles, inputStyles} from './styles/layoutStyles';

export default function UserProfileEditor() {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [email, setEmail] = useState(user.email || "");

    const updateUserData = () => {
        return update(ref(db, `users/${user.uid}`), {
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
            });
    };

    const saveProfileChanges = () => {
        updateEmail(auth.currentUser, email).then(() => {
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

            <Button variant="contained" onClick={saveProfileChanges}>Save Changes</Button>
        </Box>
    );
};