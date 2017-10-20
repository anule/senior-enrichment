import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../reducers';


export class AddCampus extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="add-campus-form">
        <form>
        <div>
          <label>Campus Name</label>
          <input type="text" name="campus-name" />
          <label>Image URL</label>
          <input type="text" name="image-URL" placeholder="Paste image URL here" />
          <span>
            <button type="submit">Submit</button>
          </span>
        </div>
        </form>
      </div>
    )
  }
};


const mapState = null;
const mapDispatch = { postCampus };
export default connect(mapState, mapDispatch)(AddCampus);
