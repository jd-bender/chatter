import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CssBaseline} from '@mui/material';

import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Home from './Home';

const Chatter = () => (
    <Provider store={store}>
        <CssBaseline />

        <Router>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/createAccount" element={<CreateAccount />} />
                </Route>
            </Routes>
        </Router>
    </Provider>
);

export default Chatter;