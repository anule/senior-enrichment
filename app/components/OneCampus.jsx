import React, { Component } from 'react';
import { fetchSingleCampus } from '../reducers';
import { connect } from 'react-redux';

export class OneCampus extends Component {

  componentWillMount() {
    this.props.fetchSingleCampus(this.props.match.params.campusId);
    // console.log(this.props.match.params.campusId)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.oneCampus.name}</h1>
        <img src={this.props.oneCampus.image} alt={`${this.props.oneCampus.name} + campus`} />
      </div>
    );
  }
}

const mapState = ({ oneCampus }) => ({ oneCampus });
const mapDispatch = { fetchSingleCampus };
export default connect(mapState, mapDispatch)(OneCampus);

