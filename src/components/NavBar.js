import React from 'react';
import {Drawer, Divider} from '@mui/material';
import {navbarWidth} from '../styles/layoutStyles';

export default function NavBar() {
    const styles = {
        width: navbarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: navbarWidth,
            boxSizing: 'border-box'
        }
    };
    return (
        <Drawer sx={styles} variant="permanent" anchor="left">
            <Divider />
        </Drawer>
    );
};