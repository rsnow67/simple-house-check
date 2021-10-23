import { combineReducers, createStore } from 'redux';
import loginReducer from '../reducers/login';

const rootReducer = combineReducers({
	login: loginReducer,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)