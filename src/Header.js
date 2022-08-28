import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
                <Typography>Chatter</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;