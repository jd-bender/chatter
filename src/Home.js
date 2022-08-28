import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';

const Home = () => {
    const user = useSelector(state => state.user);
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    };
    
    return (
        <>
            <p>Home</p> 
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default Home;