import React from 'react';
import { Switch, Route } from 'react-router';
import PrivateRoute from '../../hocs/PrivateRoute';
import Hotels from '../Hotels/Hotels';
import Login from '../Login/Login';

export default function Router() {
	return (
		<Switch>
			<PrivateRoute path="/" exact>
				<Hotels />
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