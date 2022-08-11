import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from './reducers/counterSlice';

const Home = () => {
    const navigate = useNavigate();
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <>
            <p>Home</p> 
            <button onClick={() => navigate('/login')}>Go to Login</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(3))}>Increment By 3</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    );
};

export default Home;