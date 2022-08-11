import React from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <p>Login</p>
            <TextField label="Email" variant="outlined" />
            <TextField label="Password" variant="outlined" />
            <button onClick={() => navigate('/')}>Go to Home</button>
            <Link to="/createAccount">Sign Up</Link>
        </>
    );
};

export default Login;