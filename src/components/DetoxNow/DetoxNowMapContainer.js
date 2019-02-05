/*global google*/

import React, {Component} from "react";
import {connect} from 'react-redux';
import '../Footer/Footer';

// google maps, also the above declaration is nessasary when using directions
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

// sweet alert
import swal from 'sweetalert';




class DetoxNowMapContainer extends Component {

    // state containing the origin coords for the directions request and directions response 
    // for the display on the dom
    state = {
          origin: {
              lat: 0,
              lng: 0
          },
          directions: ''
    }

    // run these as soon as possible 
    componentDidMount() {
        // get destination 
        this.getDetoxWithMostBedsAvailable();
        // get and set origin
        this.getGeoLocation();
    }

    // getDetoxWithMostBedsAvailable dispatches a call to find the detox with the most beds available
    getDetoxWithMostBedsAvailable = (event) => {
        this.props.dispatch({
            type: 'GET_DETOX_WITH_LOWEST_BED_COUNT'
        });
    }

    // captures users current location 
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('in getGeoLoaction','lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
                         this.setState({
                             // sets origin latituude and longitude
                             ...this.state,
                             origin: {
                                 lat: position.coords.latitude,
                                 lng: position.coords.longitude
                             }
                         })
                        // run displayDirections
                        this.displayDirections();
                     } 
                 )
            } else {
                swal("Location services not supported by your browser", "warning");
        }
    }

    // makes directions request 
    displayDirections = () => {
        console.log('in displayDireactions', this.props.reduxState.currentLocation.lat, this.props.reduxState.currentLocation.lng)
        console.log('in displayDireactions', this.props.reduxState.detoxLatLng.lat, this.props.reduxState.detoxLatLng.lng)
        const DirectionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer();
        if ( this.state.origin.lat === 0 || this.state.origin.lng === 0 ) {
            this.getGeoLocation(); 
            } else {
            DirectionsService.route({
                origin: new google.maps.LatLng(this.props.reduxState.currentLocation.lat, this.props.reduxState.currentLocation.lng),
                destination: new google.maps.LatLng(this.props.reduxState.detoxLatLng.lat, this.props.reduxState.detoxLatLng.lng),
                travelMode: google.maps.TravelMode.DRIVING
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                    console.log(result)
                    this.setState({
                        directions: result
                    });
                console.log(result)
                } else {
                console.error(`error fetching directions ${result}`);
                // swal("Trying again", "Directions request failed due to " + status, "warning");
                // try again
                this.getGeoLocation();
                }
            });
            }
    }

render (){

    return (
        <div>
            {/* {
                JSON.stringify(this.state.origin)
            }
            <br/>
             {
                 JSON.stringify(this.state.destination)
             } */}
             <div align="center">
 
                    <p>Wait until map displays route</p>
                    <p>Scroll Down for Directions</p>
             
             </div>
            <header> 
                <div>
                    <h2>{this.props.reduxState.detoxLatLng.detox_center_name}</h2>
                    {/* using an input makes it easy for a user to copy the address */}
                    <input defaultValue={this.props.reduxState.detoxLatLng.address} />
            </div>
            </header>
            <GoogleMap
                defaultZoom={10}
                center = {{lat: 44.975918, lng: -93.273079 }}>
                { this.state.directions && < DirectionsRenderer directions = { this.state.directions } 
                panel= { document.getElementById('panel') }/>}
                <div id="panel">
                </div>
            </GoogleMap>
      </div>
    );
  }
}

               
const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(withScriptjs(withGoogleMap(DetoxNowMapContainer)));