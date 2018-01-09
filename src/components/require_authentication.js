import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
  class Authentication  extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }


    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps({authenticated}) {
    return {authenticated};
  }

  return withRouter(connect(mapStateToProps)(Authentication));

  // return connect(mapStateToProps)(Authentication);
}




// import Authentication; // This is my HOC
// import Resource; // This is the component I want to wrap

// const ComposedComponent = Authentication(Resource);