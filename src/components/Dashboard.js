import React from 'react';
import {Box} from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import UserProfileEditor from './UserProfileEditor';
import {navbarWidth, headerHeight} from '../styles/layoutStyles';

export default function Dashboard() {
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/myProfile" element={<UserProfileEditor />} />
                </Routes>
            </Box>
        </Box>
    );
};