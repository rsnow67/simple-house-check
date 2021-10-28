import React from 'react';
import { Switch, Route } from 'react-router';
import { PrivateRoute } from './PrivateRoute';
import { HotelsPage } from '../HotelsPage/HotelsPage';
import { Login } from '../Login/Login';

export const Router = () => {
    return (
        <Switch>
            <PrivateRoute path="/" exact>
                <HotelsPage />
            </PrivateRoute>
            <Route path="/login">
                <Login />
            </Route>
            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}