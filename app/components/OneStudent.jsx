import React, { Component } from 'react';
import { fetchSingleStudent } from '../reducers';
import { connect } from 'react-redux';

export class OneStudent extends Component {

  componentWillMount() {
    this.props.fetchSingleStudent(this.props.match.params.studentId);
    // console.log(this.props.match.params.campusId)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.oneStudent.name}</h1>
        <h4>{this.props.oneStudent.campusId}</h4>
      </div>
    );
  }
}

const mapState = ({ oneStudent }) => ({ oneStudent });
const mapDispatch = { fetchSingleStudent };
export default connect(mapState, mapDispatch)(OneStudent);

