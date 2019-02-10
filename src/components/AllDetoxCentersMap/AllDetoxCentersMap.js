import React, { Component } from 'react';
import AllDetoxCentersMapContainer from './AllDetoxCentersMapContainer';
import {connect} from 'react-redux';
import GOOGLE_MAPS_API_KEY from '../api_key';
import LoginButton from '../LoginButton/LoginButton';
import DetoxNowButton from '../DetoxNowButton/DetoxNowButton';
import RegisterButton from '../RegisterButton/RegisterButton';
import Button from '@material-ui/core/Button';


class AllDetoxCentersMap extends Component {


render() {
		return ( 
            <div>
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
                <DetoxNowButton />
            </footer>
            </div>
    );
  }
}    

const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(AllDetoxCentersMap);