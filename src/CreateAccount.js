import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {auth, createUserWithEmailAndPassword} from './firebase';

const CreateAccount = () => {
    const didMount = useRef(false);
    
    const [accountDetails, setAccountDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const [validation, setValidation] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    useEffect(() => {
        if (didMount.current) {
            const hasInvalidInputs = checkForInvalidInputs();
            
            if (!hasInvalidInputs) {
                submitAccountDetails();
            } else {
                console.log("has invalid inputs");
            }
        } else {
            didMount.current = true;
        }
    }, [validation]);
    
    const checkForInvalidInputs = () => {
        let hasInvalidInput = false;
        const values = Object.values(validation);
        
        for (const val of values) {
            if (val) {
                hasInvalidInput = true;
                break;
            }
        }
        
        return hasInvalidInput;
    };
    
    const validateInputs = () => {
        let errors = validation;

        if (!accountDetails.firstName) {
            errors.firstName = "First name is required";
        } else {
            errors.firstName = "";
        }

        if (!accountDetails.lastName) {
            errors.lastName = "Last name is required";
        } else {
            errors.lastName = "";
        }

        const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!accountDetails.email) {
            errors.email = "Email is required";
        } else if (!accountDetails.email.match(emailCond)) {
            errors.email = "Please use a valid email address";
        } else {
            errors.email = "";
        }

        const cond1 = "/^(?=.*[a-z]).{6,20}$/";
        const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
        const cond3 = "/^(?=.*[0-9]).{6,20}$/";
        const password = accountDetails.password;
        
        if (!password) {
            errors.password = "password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be longer than 6 characters";
        } else if (password.length >= 20) {
            errors.password = "Password must shorter than 20 characters";
        } else if (!password.match(cond1)) {
            errors.password = "Password must contain at least one lowercase";
        } else if (!password.match(cond2)) {
            errors.password = "Password must contain at least one capital letter";
        } else if (!password.match(cond3)) {
            errors.password = "Password must contain at least a number";
        } else {
            errors.password = "";
        }

        if (!accountDetails.confirmPassword) {
            errors.confirmPassword = "Password confirmation is required";
        } else if (accountDetails.confirmPassword !== accountDetails.Password) {
            errors.confirmPassword = "Password does not match confirmation password";
        } else {
            errors.password = "";
        }
        console.log("setting validation:");
        console.log(errors);
        setValidation(errors);
    };
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setAccountDetails({...accountDetails, [name]: value});
    };
    
    const submitAccountDetails = () => {
        createUserWithEmailAndPassword(auth, email, password).then(userData => {
            console.log("successfully created user");
            console.log(userData); 
        });
    };
    
    return (
        <>
            <p>Create Account</p>
            
            <TextField 
                label="First Name" 
                name="firstName"
                value={accountDetails.firstName}
                error={!!validation.firstName} 
                helperText={validation.firstName}
                onChange={(e) => handleChange(e)} 
            />
            <TextField 
                label="Last Name"
                name="lastName" 
                value={accountDetails.lastName}
                error={!!validation.lastName} 
                helperText={validation.lastName}
                onChange={(e) => handleChange(e)}
            />
            <TextField 
                label="Email" 
                name="email"
                value={accountDetails.email}
                error={!!validation.email} 
                helperText={validation.email}
                onChange={(e) => handleChange(e)} 
            />
            <TextField 
                label="Password" 
                name="password"
                type="password"
                value={accountDetails.password}
                error={!!validation.password} 
                helperText={validation.password}
                onChange={(e) => handleChange(e)} 
            />
            <TextField 
                label="Confirm Password" 
                name="confirmPassword"
                type="password"
                value={accountDetails.confirmPassword}
                error={!!validation.confirmPassword} 
                helperText={validation.confirmPassword}
                onChange={(e) => handleChange(e)} 
            />
            
            <button onClick={validateInputs}>Submit</button>
            <Link to='/login'>Return</Link>
        </>  
    );
};

export default CreateAccount;