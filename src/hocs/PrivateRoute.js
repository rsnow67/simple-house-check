import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { loginSelector } from '../selectors/login';

export default function PrivateRoute(props) {
	const isAuthed = useSelector(loginSelector);
	return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}
