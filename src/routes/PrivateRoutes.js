import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

export default function PrivateRoutes() {
    const isAuthenticated = useSelector((state) => !!state.user.uid);
    
    return (
        isAuthenticated ? <Outlet /> : <Navigate replace to="/login" />
    );
};