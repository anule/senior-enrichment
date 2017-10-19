import React, { Component } from 'react';
import { fetchCampuses } from '../reducers';
import store from '../store';
import { Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampus';
import Navbar from './Navbar';
import { connect } from 'react-redux';

export default class Main extends Component {
  // componentDidMount() {
  //   const campusesThunk = fetchCampuses();
  //   store.dispatch(campusesThunk);
  // }

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/campuses" component={AllCampuses} />
          </Switch>
        </main>
      </div>
    );
  }
}


// const mapState = null;
// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     // dispatch(fetchStudents());
//   },
// });
// export default connect(mapState, mapDispatch)(Main);
