import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';



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
        <center>
        <Button
          size="large" 
          variant="contained" 
          color="primary" 
          href = {
            'http://www.google.com/maps/place/' + this.props.reduxState.detoxLatLng.lat + ',' + this.props.reduxState.detoxLatLng.lng
          }
        >
        Detox Now
          </Button>
        </center>
      </div>
    );
  }
}

const mapreduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapreduxStateToProps)(DetoxNowButton);
