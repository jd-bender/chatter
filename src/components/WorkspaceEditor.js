import React, {useState} from 'react';
import {Box, Typography, TextField, Button} from '@mui/material';
import {pushDB} from '../databaseActions';
import {mainViewStyles, inputStyles} from '../styles/layoutStyles';

export default function WorkspaceEditor() {
    const [workspaceName, setWorkspaceName] = useState('');

    const saveNewWorkspace = () => {
        if (workspaceName.length > 5) {
            pushDB(`chatter/workspaces`, {name: workspaceName});
        }
    };

    return (
        <Box sx={mainViewStyles}>
            <Typography sx={inputStyles}>Create Workspace</Typography>

            <TextField
                label="Workspace Name"
                value={workspaceName}
                sx={inputStyles}
                onChange={(e) => setWorkspaceName(e.target.value)} />

            <Button variant="contained" onClick={saveNewWorkspace}>Create Workspace</Button>
        </Box>
    );
};