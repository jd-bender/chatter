import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {setUser} from './reducers/userSlice';
import {useDispatch} from 'react-redux';
import {set, ref} from 'firebase/database';
import {auth, database as db} from './firebase';

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
    
    return (
        <>
            <p>Create Account</p>
            
            <TextField 
                label="First Name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <TextField 
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField 
                label="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
                label="Password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button onClick={submitAccountDetails}>Submit</button>
            <Link to='/login'>Return</Link>
        </>  
    );
};

export default CreateAccount;