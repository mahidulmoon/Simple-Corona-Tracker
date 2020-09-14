import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
export default class BodyPage extends Component {
  render() {
    return (
      <div className="bodycontainer"><Container>{this.props.children}</Container></div>
    );
  }
}
