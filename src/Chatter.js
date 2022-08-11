import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './Login';
import Home from './Home';

const Chatter = () => {    
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default Chatter;