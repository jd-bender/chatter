import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';

import {navbarWidth, headerHeight} from './styles/layoutStyles';

const Header = () => {
    const [anchorComponent, setAnchorComponent] = useState(null);

    const openMenu = (event) => {
        setAnchorComponent(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorComponent(null);
    };

    const logout = () => {
        signOut(auth);
        closeMenu();
    };

    const appBarStyles = { 
        display: 'flex',
        width: `calc(100% - ${navbarWidth}px)`,
        height: `${headerHeight}px`,
        ml: `${navbarWidth}px` 
    };

    const toolbarStyles = {
        height: `${headerHeight}px`
    };

    const typographyStyles = {
        flexGrow: 1
    };

    const accountCircleStyles = {
        width: `2em`, 
        height: `2em`
    };

    const menuOrigin = {
        vertical: 'top',
        horizontal: 'right'
    };

    return (
        <AppBar sx={appBarStyles} position="fixed">
            <Toolbar sx={toolbarStyles}>
                <Typography variant='h3' sx={typographyStyles}>Chatter</Typography>
                <IconButton size="large" color="inherit" onClick={openMenu}>
                    <AccountCircle sx={accountCircleStyles} />
                </IconButton>
                <Menu
                    anchorEl={anchorComponent}
                    anchorOrigin={menuOrigin}
                    keepMounted
                    transformOrigin={menuOrigin}
                    open={Boolean(anchorComponent)}
                    onClose={closeMenu}
                >
                    <MenuItem onClick={logout}>Log Out</MenuItem>
              </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;