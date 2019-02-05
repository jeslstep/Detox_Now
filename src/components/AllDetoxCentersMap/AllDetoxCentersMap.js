import React, { Component } from 'react';
import AllDetoxCentersMapContainer from './AllDetoxCentersMapContainer';
import {connect} from 'react-redux';
import AllDetoxCentersNav from '../AllDetoxCentersNav/AllDetoxCentersNav';
import GOOGLE_MAPS_API_KEY from '../api_key';



class AllDetoxCentersMap extends Component {


render() {
    
   
		return ( 
            <div>
                <AllDetoxCentersNav />
                <AllDetoxCentersMapContainer
                // google api key needed 
                    googleMapURL = {
                        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`
                    }
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `415px`, width: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    location = {
                        {
                            lat: 44.975918,
                            lng: -93.273079
                        }
                    }
			/>
            </div>
    );
  }
}    

const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(AllDetoxCentersMap);