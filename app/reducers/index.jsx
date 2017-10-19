import { combineReducers } from 'redux';

import campus from './campus';


const rootReducer = combineReducers({
  campus,
});

export default rootReducer;
export * from './campus';

