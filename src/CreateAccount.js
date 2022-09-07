import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, TextField, Button, CircularProgress} from '@mui/material';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from './reducers/userSlice';
import {useDispatch} from 'react-redux';
import {set, ref} from 'firebase/database';
import {auth, database as db} from './firebase';
import {middleOfScreenStyles, inputStyles} from './styles/layoutStyles';

export default function CreateAccount() {  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const dispatch = useDispatch();
    
    const submitAccountDetails = () => {
        setIsCreatingAccount(true);

        createUserWithEmailAndPassword(auth, email, password).then(userData => {
            set(ref(db, `users/${userData.user.uid}`), {
                firstName,
                lastName,
                email
            }).then(() => {
                dispatch(setUser({
                    uid: userData.user.uid,
                    firstName,
                    lastName,
                    email
                }));

                setIsCreatingAccount(false);
            }).catch(e => {
                setIsCreatingAccount(false);
            });
        }).catch(e => {
            setIsCreatingAccount(false);
        });
    };

    const checkIfEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            submitAccountDetails();
        }
    };
    
    return (
        <Box sx={middleOfScreenStyles}>
            <p>Create Account</p>
            
            <TextField 
                label="First Name" 
                value={firstName}
                sx={inputStyles}
                disabled={isCreatingAccount}
                onKeyDown={checkIfEnterKeyPressed}
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <TextField 
                label="Last Name"
                value={lastName}
                sx={inputStyles}
                disabled={isCreatingAccount}
                onKeyDown={checkIfEnterKeyPressed}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField 
                label="Email" 
                value={email}
                sx={inputStyles}
                disabled={isCreatingAccount}
                onKeyDown={checkIfEnterKeyPressed}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
                label="Password" 
                type="password"
                value={password}
                sx={inputStyles}
                disabled={isCreatingAccount}
                onKeyDown={checkIfEnterKeyPressed}
                onChange={(e) => setPassword(e.target.value)} 
            />

            {
                isCreatingAccount ? 
                    <CircularProgress sx={inputStyles} />
                    : 
                    <Button variant="contained" sx={inputStyles} onClick={submitAccountDetails}>Submit</Button>
            }
            
            <Link to='/login'>Return</Link>
        </Box>  
    );
};