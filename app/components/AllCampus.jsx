import React from 'react';
import store from '../store';
import { fetchCampuses } from '../reducers';

export default class AllCampus extends React.Component {


  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.subscribe = store.subscribe(() => this.setState(store.getState()));
    store.dispatch(fetchCampuses());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log('the state', this.state);
    console.log('the campuses array', this.state.campus);

    if (this.state.campus.length) {
      return (
        <div className="showAll">
          <h2>Our Campuses</h2>
          {
            this.state.campus.map(campus => (
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
      return ( <h1>Sorry haven't rendered :/</h1>)
    }
  }
}
