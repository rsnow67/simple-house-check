import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import Hotels from '../Hotels/Hotels';
import Login from '../Login/Login';

const PrivateRoute = (props) => {
	const isAuthed = useSelector((state) => state.login.isAuthed);
	return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<Login />
			</Route>
			<PrivateRoute path="/hotels" exact>
				<Hotels />
			</PrivateRoute>
			<Route>
				<p>404: not found</p>
			</Route>
		</Switch>
	)
}