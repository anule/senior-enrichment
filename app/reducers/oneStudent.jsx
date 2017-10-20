import axios from 'axios';

// ACTION TYPE
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';

// ACTION CREATOR
export function getSingleStudent(student) {
  const action = { type: GET_SINGLE_STUDENT, student };
  return action;
}

// THUNK CREATOR
export function fetchSingleStudent(studentId) {
  return function thunk(dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then((singleStudent) => {
        // console.log('single campus', singleCampus);
        const action = getSingleStudent(singleStudent);
        dispatch(action);
      });
  };
}

// REDUCER
export default function singleStudentReducer(state = '', action) {
  switch (action.type) {
    case GET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
}
