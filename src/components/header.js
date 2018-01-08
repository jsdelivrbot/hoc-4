import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';


class Header extends Component {
  

  authButton = () => {
    if (this.props.authenticated) {
      return (
        <div>
          <button className="btn btn-danger" onClick={() => this.props.authenticate(false)}>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn btn-danger" onClick={() => this.props.authenticate(true)}>
            Sign In
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resource">Resouece</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({authenticated}) {
  return {
    authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);