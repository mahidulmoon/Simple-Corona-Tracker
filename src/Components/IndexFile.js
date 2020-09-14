import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FooterFile from './FooterFile';
import BodyPage from './BodyPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Bangladesh from './Bangladesh';
import AllDistricts from './AllDistricts';
export default class IndexFile extends Component {
  render() {
    return (
      <React.Fragment>
          <NavigationBar />
          <br />
          <br />
          <br />
          <Router>
              <BodyPage>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/bd" component={Bangladesh} />
                      <Route exact path="/district" component={AllDistricts} />
                  </Switch>
              </BodyPage>
          </Router>
          <FooterFile />
      </React.Fragment>
    );
  }
}
