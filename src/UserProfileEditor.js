import React, {useState} from 'react';
import {Typography, TextField, Button} from '@mui/material';

const UserProfileEditor = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <Typography>My Profile</Typography>

            <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />

            <TextField
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />

            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <Button variant="contained">Save Changes</Button>
        </>
    );
};

export default UserProfileEditor;