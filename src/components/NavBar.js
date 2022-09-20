import React from 'react';
import {Drawer, Divider, IconButton, Tooltip} from '@mui/material';
import {AddCircle} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {navbarWidth} from '../styles/layoutStyles';

export default function NavBar() {
    const navigate = useNavigate();

    const styles = {
        display: 'flex',
        width: navbarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: navbarWidth,
            boxSizing: 'border-box'
        }
    };
    const addCircleStyles = {
        width: `2em`, 
        height: `2em`
    };

    const buttonStyles = {
        ...addCircleStyles,
        margin: '0 auto'
    };

    const openWorkspaceEditor = () => {
        navigate('/workspaceEditor');
    };

    return (
        <Drawer sx={styles} variant="permanent" anchor="left">
            <Tooltip title="Add Workspace">
                <IconButton size="large" color="inherit" sx={buttonStyles} onClick={openWorkspaceEditor}>
                    <AddCircle sx={addCircleStyles} />
                </IconButton>
            </Tooltip>
            
            <Divider />
        </Drawer>
    );
};