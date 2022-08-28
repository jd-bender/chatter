import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, TextField, Button} from '@mui/material';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from './reducers/userSlice';
import {useDispatch} from 'react-redux';
import {set, ref} from 'firebase/database';
import {auth, database as db} from './firebase';
import {middleOfScreenStyles} from './styles/layoutStyles';

const CreateAccount = () => {  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    
    const submitAccountDetails = () => {
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
            }).catch(e => {
                console.log("something went wrong:");
                console.log(e);
            });
        }).catch(e => {
            console.log("something went wrong:");
            console.log(e);
        });
    };

    const inputStyles = {
        mb: '1%'
    };
    
    return (
        <Box sx={middleOfScreenStyles}>
            <p>Create Account</p>
            
            <TextField 
                label="First Name" 
                value={firstName}
                sx={inputStyles}
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <TextField 
                label="Last Name"
                value={lastName}
                sx={inputStyles}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField 
                label="Email" 
                value={email}
                sx={inputStyles}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
                label="Password" 
                type="password"
                value={password}
                sx={inputStyles}
                onChange={(e) => setPassword(e.target.value)} 
            />
            
            <Button variant="contained" sx={inputStyles} onClick={submitAccountDetails}>Submit</Button>
            <Link to='/login'>Return</Link>
        </Box>  
    );
};

export default CreateAccount;