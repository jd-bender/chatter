import React from 'react';
import {useNavigate} from 'react-router-dom';
//import {useSelector, useDispatch} from 'react-redux';
import {database as db, ref, onValue} from './firebase';

const Home = () => {
    const navigate = useNavigate();
    //const count = useSelector((state) => state.counter.value);
    //const dispatch = useDispatch();
    
    const nameRef = ref(db, 'name/');

    onValue(nameRef, (snapshot) => {
        const name = snapshot.val();
        console.log("name: " + name);
    });
    
    return (
        <>
            <p>Home</p> 
            <button onClick={() => navigate('/login')}>Go to Login</button>
            {/* <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(3))}>Increment By 3</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button> */}
        </>
    );
};

export default Home;