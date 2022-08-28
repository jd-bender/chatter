import React, {useState} from 'react';
import {Box, TextField, Button, CircularProgress} from '@mui/material';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {child, get, ref} from 'firebase/database';
import {setUser} from './reducers/userSlice';
import {auth, database as db} from './firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const dispatch = useDispatch();

    const login = () => {
        setIsLoggingIn(true);

        signInWithEmailAndPassword(auth, email, password).then(userData => {
            get(child(ref(db), `users/${userData.user.uid}`)).then((snapshot) => {
                const data = snapshot.val();

                dispatch(setUser({
                    uid: userData.user.uid,
                    ...data
                }));

                setIsLoggingIn(false);
            }).catch(e => {
                setIsLoggingIn(false);
            });
        }).catch(e => {
            setIsLoggingIn(false);
        });
    };

    const styles = {
        flexGrow: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    const inputStyles = {
        mb: '1%'
    };

    return (
        <Box sx={styles}>
            <p>Chatter Login</p>

            <TextField 
                label="Email" 
                variant="outlined"
                value={email}
                sx={inputStyles}
                disabled={isLoggingIn}
                onChange={(e) => setEmail(e.target.value)} />
            <TextField 
                label="Password" 
                variant="outlined"
                type="password"
                value={password}
                sx={inputStyles}
                disabled={isLoggingIn}
                onChange={(e) => setPassword(e.target.value)} />

            {
                isLoggingIn ? 
                    <CircularProgress sx={inputStyles} />
                    : 
                    <Button variant="contained" sx={inputStyles} onClick={login}>Login</Button>
            }
            
            <Link to="/createAccount">Sign Up</Link>
        </Box>
    );
};

export default Login;