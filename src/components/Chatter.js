import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CssBaseline} from '@mui/material';

import PublicRoutes from '../routes/PublicRoutes';
import PrivateRoutes from '../routes/PrivateRoutes';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Dashboard from './Dashboard';

export default function Chatter() {
    return (
        <Provider store={store}>
            <CssBaseline />
    
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="*" element={<Dashboard />} />
                    </Route>
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/createAccount" element={<CreateAccount />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};