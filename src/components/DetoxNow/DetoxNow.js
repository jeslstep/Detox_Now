import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetoxNowDefaultMap from './DetoxNowMap';
import DetoxNowNav from '../DetoxNowNav/DetoxNowNav';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


export class DetoxNowDefault extends Component {

  render() {
    return (
      <div>
        <DetoxNowNav/>
        <DetoxNowDefaultMap />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(DetoxNowDefault);
