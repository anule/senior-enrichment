import axios from 'axios';

// ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTION CREATORS
export const getStudents = students => ({
  type: GET_STUDENTS,
  students,
});

export const addStudent = student => ({
  type: ADD_STUDENT,
  student,
});

export const editStudent = student => ({
  type: EDIT_STUDENT,
  student,
});

export const deleteStudent = student => ({
  type: DELETE_STUDENT,
  student,
});

// THUNK CREATORS
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

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students')
      .then(() => {
        const action = addStudent(student);
        dispatch(action);
      });
  };
}
// REDUCERS
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
