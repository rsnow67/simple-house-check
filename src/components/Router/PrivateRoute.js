import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { loginSelector } from '../../store/selectors/login';

export const PrivateRoute = ({ children, ...props }) => {
    const isAuthed = useSelector(loginSelector);

    return (
        <Route {...props}>
            {isAuthed ? children : <Redirect to="/login" />}
        </Route >
    )
}