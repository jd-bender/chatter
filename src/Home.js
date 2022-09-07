import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box} from '@mui/material';

export default function Home() {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    
    return (
        <Box>
            <p>Home</p> 
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
        </Box>
    );
};