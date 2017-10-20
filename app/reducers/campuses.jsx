import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


// ACTION CREATORS
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function editCampus(campus) {
  const action = { type: EDIT_CAMPUS, campus };
  return action;
}

export function deleteCampus() {
  const action = { type: DELETE_CAMPUS, campus: null };
  return action;
}

// THUNK CREATORS
/* Retrieves all campuses from the server */
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then((campuses) => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus() {
  return function thunk(dispatch) {
    return axios.post('/api/campuses')
      .then(res => res.data)
      .then((campus) => {
        const action = addCampus(campus);
        dispatch(action);
      });
  };
}

// REDUCER
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state.campuses, action.campus];

    case EDIT_CAMPUS:
      return action.campus;

    case DELETE_CAMPUS:
      return action.campus;

    default:
      return state;
  }
}
