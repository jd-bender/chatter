import React from 'react';
import {Drawer, Divider} from '@mui/material';

const NavBar = () => {
    const styles = {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box'
        }
    };
    return (
        <Drawer sx={styles} variant="permanent" anchor="left">
            <Divider />
        </Drawer>
    );
};

export default NavBar;