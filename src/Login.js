import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {child, get, ref} from 'firebase/database';
import {setUser} from './reducers/userSlice';
import {auth, database as db} from './firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then(userData => {
            get(child(ref(db), `users/${userData.user.uid}`)).then((snapshot) => {
                const data = snapshot.val();
                console.log("data:");
                console.log(data);
                dispatch(setUser({
                    uid: userData.user.uid,
                    ...data
                }));
            }).catch(e => {});
        });
    };

    return (
        <>
            <p>Login</p>

            <TextField 
                label="Email" 
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <TextField 
                label="Password" 
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={login}>Login</button>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <Link to="/createAccount">Sign Up</Link>
        </>
    );
};

export default Login;