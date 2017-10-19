import React from 'react';
import store from '../store';
import { fetchCampuses } from '../reducers';
import { connect } from 'react-redux';

class AllCampus extends React.Component {

  constructor() {
    super();
    this.state = { loading: true }
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
          {
            this.props.campus.map(campus => (
              <div className="campus-card" key={campus.id}>
                <img src={campus.image} alt="campus" />
                <p className="campus-name">{campus.name}</p>
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
      return ( <h1>Loading ...</h1>)
    }
  }
}

const mapState = ({ campus }) => ({ campus });
const mapDispatch = { fetchCampuses };
const allCampusContainer = connect(mapState, mapDispatch)(AllCampus);
export default allCampusContainer;
