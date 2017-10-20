import React, { Component } from 'react';
import { fetchCampuses } from '../reducers';
import store from '../store';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AllCampuses from './AllCampus';
import OneCampus from './OneCampus';
import AddCampus from './AddCampus';
import AllStudents from './AllStudents';
import OneStudent from './OneStudent';
import Navbar from './Navbar';

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
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/campuses/:campusId" component={OneCampus} />
            <Route exact path="/campuses/add/new-campus" component={AddCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:studentId" component={OneStudent} />
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
