import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {auth, createUserWithEmailAndPassword} from './firebase';
import validator from 'email-validator';

const CreateAccount = () => {  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [firstNameValidationText, setFirstNameValidationText] = useState("");
    const [lastNameValidationText, setLastNameValidationText] = useState("");
    const [emailValidationText, setEmailValidationText] = useState("");
    const [passwordValidationText, setPasswordValidationText] = useState("");
    const [confirmPasswordValidationText, setConfirmPasswordValidationText] = useState("");
    
    useEffect(() => {
        const hasInvalidInputs = checkForInvalidInputs();
        console.log("hasInvalidInputs: " + hasInvalidInputs);
        if (!hasInvalidInputs) {
            submitAccountDetails();
        }
    }, [firstNameValidationText, lastNameValidationText, emailValidationText, passwordValidationText, confirmPasswordValidationText]);
    
    const checkForInvalidInputs = () => {
        return !firstNameValidationText &&
            !lastNameValidationText &&
            !emailValidationText &&
            !passwordValidationText &&
            !confirmPasswordValidationText;
    };
    
    const validateFirstName = () => {
        console.log("in validateFirstName");
        if (!firstName) {
            console.log("no name");
            setFirstNameValidationText("First name is required");
        } else {
            console.log("passed validation");
            setFirstNameValidationText("");
        }
    };
    
    const validateLastName = () => {
        if (!lastName) {
            setLastNameValidationText("Last name is required");
        } else {
            setLastNameValidationText("");
        }
    };
    
    const validateEmail = () => {
        if (!email) {
            setEmailValidationText("Email is required");
        } else if (validator.validate(email)) {
            setEmailValidationText("");
        } else {
            setEmailValidationText("Invalid email address");
        }
    };
    
    const validatePassword = () => {
        if (!password) {
            setPasswordValidationText("password is required");
        } else if (password.length < 6) {
            setPasswordValidationText("Password must be longer than 6 characters");
        } else if (password.length >= 20) {
            setPasswordValidationText("Password must shorter than 20 characters");
        } else {
            setPasswordValidationText("");
        }
    };
    
    const validateConfirmPassword = () => {
        if (!confirmPassword) {
            setConfirmPasswordValidationText("Password confirmation is required");
        } else if (confirmPassword !== password) {
            setConfirmPasswordValidationText("Password does not match confirmation password");
        } else {
            setConfirmPasswordValidationText("");
        }
    };
    
    const validateInputs = () => {
        console.log("validating inputs");
        validateFirstName();
        validateLastName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
    };
    
    const submitAccountDetails = () => {
        console.log("in submitAccountDetails");
        createUserWithEmailAndPassword(auth, email, password).then(userData => {
            console.log("successfully created user");
            console.log(userData); 
        }).catch(e => {
            console.log("something went wrong");
            console.log(e);
        });
    };
    
    return (
        <>
            <p>Create Account</p>
            
            <TextField 
                label="First Name" 
                value={firstName}
                error={!!firstNameValidationText} 
                helperText={firstNameValidationText}
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <TextField 
                label="Last Name"
                value={lastName}
                error={!!lastNameValidationText} 
                helperText={lastNameValidationText}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField 
                label="Email" 
                value={email}
                error={!!emailValidationText} 
                helperText={emailValidationText}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
                label="Password" 
                type="password"
                value={password}
                error={!!passwordValidationText} 
                helperText={passwordValidationText}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <TextField 
                label="Confirm Password" 
                type="password"
                value={confirmPassword}
                error={!!confirmPasswordValidationText} 
                helperText={confirmPasswordValidationText}
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            
            <button onClick={validateInputs}>Submit</button>
            <Link to='/login'>Return</Link>
        </>  
    );
};

export default CreateAccount;