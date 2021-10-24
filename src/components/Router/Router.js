import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import PrivateRoute from '../../hocs/PrivateRoute';
import { loginSelector } from '../../selectors/login';
import Hotels from '../Hotels/Hotels';
import Login from '../Login/Login';

export default function Router() {
	const isAuthed = useSelector(loginSelector);

	return (
		<Switch>
			<Route path="/login" exact render={() => {
				return isAuthed ? <Redirect to="/" /> : <Login />
			}}>
			</Route>
			<PrivateRoute path="/" exact>
				<Hotels />
			</PrivateRoute>
			<Route>
				<Redirect to="/" />
			</Route>
		</Switch>
	)
}