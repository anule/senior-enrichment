import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';


// ACTION CREATORS
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function editStudent(student) {
  const action = { type: EDIT_STUDENT, student };
  return action;
}

export function deleteStudent() {
  const action = { type: DELETE_STUDENT, student: null };
  return action;
}

// THUNK CREATORS
/* Retrieves all campuses from the server */
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then((students) => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postStudent() {
  return function thunk(dispatch) {
    return axios.post('/api/students')
      .then(res => res.data)
      .then((student) => {
        const action = addStudent(student);
        dispatch(action);
      });
  };
}

// REDUCER
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return [...state.students, action.student];

    case EDIT_STUDENT:
      return action.student;

    case DELETE_STUDENT:
      return action.student;

    default:
      return state;
  }
}
