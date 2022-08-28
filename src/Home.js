import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box} from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import {navbarWidth, headerHeight} from './styles/layoutStyles';

const Home = () => {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");

    const styles = {
        flexGrow: 1, 
        p: 3, 
        ml: `${navbarWidth}px`, 
        mt: `${headerHeight}px`
    };
    
    return (
        <Box>
            <Header />
            <NavBar />
            <Box sx={styles}>
                <p>Home</p> 
                <p>first name: {firstName}</p>
                <p>last name: {lastName}</p>
            </Box>
        </Box>
    );
};

export default Home;