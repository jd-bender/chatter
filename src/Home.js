import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';
import {Box, CssBaseline} from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';

const Home = () => {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");

    const logout = () => {
        signOut(auth);
    };
    
    return (
        <Box>
            <CssBaseline />
            <Header />
            <NavBar />
            <Box component="main" sx={{flexGrow: 1, p: 3, ml: '240px', mt: '65px'}}>
                <p>Home</p> 
                <p>first name: {firstName}</p>
                <p>last name: {lastName}</p>
                <button onClick={logout}>Logout</button>
            </Box>
        </Box>
    );
};

export default Home;