import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { hotelsReducer } from './reducers/hotels';
import { loginReducer } from './reducers/login';
import { hotelsWatcher } from '../saga/hotelsSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    login: loginReducer,
    hotels: hotelsReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(hotelsWatcher);