import React from 'react';
import store from '../store';
import { fetchStudents } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllStudents extends React.Component {

  constructor() {
    super();
    this.state = { loading: true }
  }

  handleClick(evt) {
    evt.preventDefault();

  }

  componentDidMount() {
    this.props.fetchStudents()
      .then(() => this.setState({ loading: false }));
  }
  render() {
    // console.log('the state', this.state);
    // console.log('the campuses array', this.state.campus);

    if (!this.state.loading) {
      return (
        <div className="showAll">
          <h2>Our Campuses</h2>
          <Link className="add-button" to={`/campuses/add/new-student`}>
            <h4><b>Add a new student</b></h4>
          </Link>
          {
            this.props.student.map(student => (
              <div className="student-card" key={student.id}>
                <Link className="solo-student" to={`/students/${student.id}`}>
                  <h2 className="student-name">{student.name}</h2>
                  <h4 className="student-campus">{student.campusId}</h4>
                </Link>
              </div>
            ))
          }

          {/* <div className="campus-card">
            <img src="http://static1.123teachme.com/cms_images/wordss/spain_alcazar.jpg" alt="default" />
            <span>English Campus</span>
          </div> */}
        </div>
      );
    } else {
      return (<h1>Loading ...</h1>)
    }
  }
}

const mapState = ({ student }) => ({ student });
const mapDispatch = { fetchStudents };
const allStudentsContainer = connect(mapState, mapDispatch)(AllStudents);
export default allStudentsContainer;
