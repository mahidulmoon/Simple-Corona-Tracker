import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
export default class Navigationbar extends Component {
  render() {
    return (
        <div>
          <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Corona Tracker</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/district">All district</Nav.Link>
            <Nav.Link href="/bd">Bangladesh</Nav.Link>
            </Nav>
            
        </Navbar>
        <br/>
        </div>
    );
  }
}
