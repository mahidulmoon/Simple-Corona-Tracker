import React, { Component } from 'react';
import WorldCard from './WorldCard';
import AllCountry from './AllCountry';
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <WorldCard />
          <hr />
          <AllCountry />
      </React.Fragment>
    );
  }
}
