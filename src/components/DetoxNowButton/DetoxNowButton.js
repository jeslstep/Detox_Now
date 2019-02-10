import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';


// material ui style override 
const style = {
  root: {
    color: '#ffffff',
    backgroundColor: '#16233c',
    margin: 8,
    width: 300,
  },
};


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
          <section className="App-header">
              <div>
                {/* city skylinee outline image in current directory */}
                <img 
                  src={dtnow_skline_mobile} 
                  alt="city outline"/>
              </div>
        </section>
       <section className="grayBackground">
        <center>
        <Button
          size="large" 
          style={style.root}
          href = {
            'https://www.google.com/maps/search/' + this.props.reduxState.detoxLatLng.detox_center_name + '/@' +
            this.props.reduxState.detoxLatLng.lat + '/' + this.props.reduxState.detoxLatLng.lng
          }
        >
          Get a Bed
          </Button>
        </center>
        </section>
      </div>
    );
  }
}

const mapreduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapreduxStateToProps)(DetoxNowButton);
