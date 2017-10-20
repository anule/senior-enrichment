import { combineReducers } from 'redux';

import campus from './campuses';
import oneCampus from './oneCampus';
import student from './student';
import oneStudent from './oneStudent';

const rootReducer = combineReducers({
  campus,
  oneCampus,
  student,
  oneStudent,

});

export default rootReducer;
export * from './campuses';
export * from './oneCampus';
export * from './student';
export * from './oneStudent';
