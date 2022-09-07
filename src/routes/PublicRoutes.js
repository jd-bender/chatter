import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

export default function PublicRoutes() {
    const isAuthenticated = useSelector((state) => !!state.user.uid);
    
    return (
        isAuthenticated ? <Navigate replace to="/" /> : <Outlet />
    );
};