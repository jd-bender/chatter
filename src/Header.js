import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar, Typography, IconButton} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

import {navbarWidth, headerHeight} from './styles/layoutStyles';

const Header = () => {
    const appBarStyles = { 
        display: 'flex',
        width: `calc(100% - ${navbarWidth}px)`,
        height: `${headerHeight}px`,
        ml: `${navbarWidth}px` 
    };

    const toolbarStyles = {
        height: `${headerHeight}px`
    };

    const accountCircleStyles = {
        width: `2em`, 
        height: `2em`
    };

    return (
        <AppBar sx={appBarStyles} position="fixed">
            <Toolbar sx={toolbarStyles}>
                <Typography variant='h3' sx={{flexGrow: 1}}>Chatter</Typography>
                <IconButton size="large" color="inherit">
                    <AccountCircle sx={accountCircleStyles} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;