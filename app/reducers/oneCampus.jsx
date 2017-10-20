import axios from 'axios';

// ACTION TYPE
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

// ACTION CREATOR
export function getSingleCampus(campus) {
  const action = { type: GET_SINGLE_CAMPUS, campus };
  return action;
}

// THUNK CREATOR
export function fetchSingleCampus(campusId) {
  return function thunk(dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then((singleCampus) => {
        // console.log('single campus', singleCampus);
        const action = getSingleCampus(singleCampus);
        dispatch(action);
      });
  };
}

// REDUCER
export default function singleCampusReducer(state = '', action) {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
