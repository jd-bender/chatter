import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <p>Login</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </>
    );
};

export default Login;