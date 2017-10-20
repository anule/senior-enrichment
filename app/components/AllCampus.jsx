import React from 'react';
import store from '../store';
import { fetchCampuses } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllCampus extends React.Component {

  constructor() {
    super();
    this.state = { loading: true }
  }

  handleClick(evt) {
    evt.preventDefault();

  }

  componentDidMount() {
    this.props.fetchCampuses()
      .then(() => this.setState({ loading: false }));
  }
  render() {
    // console.log('the state', this.state);
    // console.log('the campuses array', this.state.campus);

    if (!this.state.loading) {
      return (
        <div className="showAll">
          <h2>Our Campuses</h2>
          <Link className="add-button" to={`/campuses/add/new-campus`}>
            <h4><b>Add a new campus</b></h4>
          </Link>
          {
            this.props.campus.map(campus => (
              <div className="campus-card" key={campus.id}>
                <Link className="solo-campus" to={`/campuses/${campus.id}`}>
                  <img src={campus.image} alt="campus" />
                  <p className="campus-name">{campus.name}</p>
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

const mapState = ({ campus }) => ({ campus });
const mapDispatch = { fetchCampuses };
const allCampusContainer = connect(mapState, mapDispatch)(AllCampus);
export default allCampusContainer;
