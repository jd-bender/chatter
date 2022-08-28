import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    const styles = { 
        width: `calc(100% - 240px)`,
        height: `65px`, 
        ml: `240px` 
    };

    return (
        <AppBar sx={styles} position="fixed">
            <Toolbar>
                <Typography>Chatter</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;