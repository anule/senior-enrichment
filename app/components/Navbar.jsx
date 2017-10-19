import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <header>
        <h1 id="title">International Knitting School</h1>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/students" activeClassName="active">Students</NavLink>
          </li>
          <li>
            <NavLink to="/campuses" activeClassName="active">Campus</NavLink>
          </li>
        </ul>
      </header>
    )
  }
}
