import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitAccountDetails = () => {
        console.log("in submitAccountDetails");
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);  
    };
    
    return (
        <>
            <p>Create Account</p>
            <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitAccountDetails}>Submit</button>
            <Link to='/login'>Return</Link>
        </>  
    );
};

export default CreateAccount;