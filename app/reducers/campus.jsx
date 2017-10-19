import axios from 'axios';

// ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';


// ACTION CREATORS
export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
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

// REDUCER
export default campusesReducer (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
}
