import React, { Component } from 'react';
import Header from './header';
import Resource from './resource';
import { Route } from 'react-router-dom';
import requireAuth from './require_authentication';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/resource" component={requireAuth(Resource)} />
      </div>
    );
  }
}
