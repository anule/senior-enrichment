import { combineReducers } from 'redux';
import campus from './campus';

const initialState = {
  campuses: [],
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default rootReducer
