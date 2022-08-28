import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

const PublicRoutes = () => {
    const isAuthenticated = useSelector((state) => !!state.user.uid);
    
    return (
        isAuthenticated ? <Navigate replace to="/" /> : <Outlet />
    );
};

export default PublicRoutes;