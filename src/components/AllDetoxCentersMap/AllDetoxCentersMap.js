import React, { Component } from 'react';
import AllDetoxCentersMapContainer from './AllDetoxCentersMapContainer';
import {connect} from 'react-redux';
import GOOGLE_MAPS_API_KEY from '../api_key';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';
import ButtonAppBar from '../UserLoginNav/ButtonAppBar';

// material ui style override 
const style = {
  root: {
    color: '#ffffff',
    backgroundColor: '#16233c',
    margin: 8,
    width: 300,
  },
    root1: {
        color: '#ffffff',
        backgroundColor: '#ce0019',
        margin: 8,
        width: 300,
    },
};

// link to all detox center map and detox now button
const MyLink = props => < Link to = "/smsform" {
    ...props
}
/>
class AllDetoxCentersMap extends Component {

      // take the user to their home page when logged in
      componentDidUpdate(prevProps) {
          if (this.props.user !== prevProps.user) {
              this.props.history.push('/home');
          }
      }

render(props) {
		return ( 
            <div>
                <section>
               {this.props.reduxState.user && (
                        <>
                       <div>
                            <ButtonAppBar/>
                        </div>
                      
                        </>
                    )}
                </section>
                <AllDetoxCentersMapContainer
                    className = "mapBorder" 
                    
                    // google api key needed 
                    googleMapURL = {
                        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
                    }
                    loadingElement={<div style={{ height: `50%`, width: `100%` }} />}
                    containerElement={<div id="map"
                        style = {
                            {
                                position: `absolute`, height: `100%`,
                                width: `100%`
                            }

                        }
                        
                        />}
                    mapElement={<div style={{ height: `100%` }} />}
                    location = {
                        {
                            lat: 44.975918,
                            lng: -93.273079
                        }
                    }
                    
			/>
            <footer>
                <section className="App-header">
                    <div>
                        {/* city skylinee outline image in current directory */}
                        <img 
                        src={dtnow_skline_mobile} 
                        alt="city outline"/>
                    </div>
                </section>
                <section className="grayBackground2">
                <center>
                <Button
                size="large" 
                style={style.root1}
                href = {
                    'https://www.google.com/maps/search/' + this.props.reduxState.detoxLatLng.detox_center_name + '/@' +
                    this.props.reduxState.detoxLatLng.lat + '/' + this.props.reduxState.detoxLatLng.lng
                }
                >
                Get a Bed
                </Button>
                {/* Show the button to smsform if the user is logged in */}
                {this.props.reduxState.user.id && (
                    <>
                    <div>
                    <Button 
                    size="large" 
                    style={style.root}
                    component={MyLink}
                    >
                    Message for Help
                    </Button>
                    </div>
                    </>
                )}
                </center>
                </section>
            </footer>
         </div>
    );
  }
}    

const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(AllDetoxCentersMap);