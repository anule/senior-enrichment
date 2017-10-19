import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (x => x);
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())));
