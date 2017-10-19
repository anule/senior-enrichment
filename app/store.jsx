import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

// ACTION TYPES


// ACTION CREATORS


// Initial State
const initialState = {
  campuses: [],
};

// REDUCER
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_CAMPUSES_FROM_SERVER:
      return Object.assign({}, state, { campuses: action.campuses });
    default:
      return state;
  }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
