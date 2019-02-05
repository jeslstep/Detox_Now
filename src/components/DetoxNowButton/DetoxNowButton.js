import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetoxNowDefaultMap from './DetoxNowMap';
import DetoxNowNav from '../DetoxNowNav/DetoxNowNav';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'


export class DetoxNowButton extends Component {

    // get detox center with most amount of beds available
    componentDidMount() {
        this.getDetoxWithMostBedsAvailable();
    }

    // getDetoxWithMostBedsAvailable dispatches a call to find the detox with the most beds available
    getDetoxWithMostBedsAvailable = (event) => {
        this.props.dispatch({
            type: 'GET_DETOX_WITH_LOWEST_BED_COUNT'
        });
    }

  render() {
    return (
      <div>
        <a href ={'http://www.google.com/maps/place/' + this.props.reduxState.detoxLatLng.lat + ',' + this.props.reduxState.detoxLatLng.lng}>Detox Now</a>
      </div>
    );
  }
}

const mapreduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapreduxStateToProps)(DetoxNowButton);
