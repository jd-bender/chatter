import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar, Typography, IconButton} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

import {navbarWidth, headerHeight} from './styles/layoutStyles';

const Header = () => {
    const styles = { 
        width: `calc(100% - ${navbarWidth}px)`,
        height: `${headerHeight}px`,
        ml: `${navbarWidth}px` 
    };

    return (
        <AppBar sx={styles} position="fixed">
            <Toolbar>
                <Typography sx={{flexGrow: 1}}>Chatter</Typography>
                <IconButton size="large" color="inherit">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;