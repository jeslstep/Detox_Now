/*global google*/

import React, {Component} from "react";
import {connect} from 'react-redux';
import '../Footer/Footer';

// google maps api 
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow } from "react-google-maps";

// material ui
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

// sweet alert
import swal from 'sweetalert';


class AllDetoxCentersMapContainer extends Component {

    // get user location and registered detox center info as soon as possible 
    componentDidMount() {
          this.getGeoLocation();
          this.getAllDetoxInfo();
      }

    // getAllDetoxInfo dispatches a call to get contacts
    getAllDetoxInfo = (event) => {
          this.props.dispatch({
              type: 'GET_DETOX_INFO'
          });
      }

    state = {
        origin: {
            lat: 0,
            lng: 0
        }, 
        destination: {
            lat: 0,
            lng: 0
        },
        directions: '',
        detox_center_name: '',
        isOpen: false,
        activeMarker: null,
        detox_id: 0

    }

    displayDirections = () => {
        console.log('Origin:', this.state.origin.lat, this.state.origin.lng)
        console.log('Destination',this.state.destination.lat, this.state.destination.lng)
        const DirectionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer();
          if (this.state.origin.lat === 0 || this.state.origin.lng === 0) {
              swal("Please try clicking get directions again", "warning");
              this.getGeoLocation();
          } else {
        DirectionsService.route({
            origin: new google.maps.LatLng(this.state.origin.lat, this.state.origin.lng),
            destination: new google.maps.LatLng(this.state.destination.lat, this.state.destination.lng),
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
                swal("Wait, trying again", "Directions request failed due to " + status, "warning");
                alert('Directions request failed due to ' + status);
            }
        });
    }
    }

    // captures users current location 
     getGeoLocation = () => {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(
                 (position) => {
                    console.log( 'lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
                    // sets origin coordinates latituude and longitude
                    this.setState({
                         ...this.state,
                         origin: {
                             lat: position.coords.latitude,
                             lng: position.coords.longitude
                         }
                     })
                 }
             )
         } else {
             alert('Location services not supported by your browser');
         }
     }

render (){
    return (
        <div>
        <div align="center">
            <p>Select a marker and click Get Directions</p>
            <p>Scroll Down for Directions</p>
        </div>
        <header> 
        <div align="center">
            <h2>{this.state.detox_center_name}</h2>
        </div>
        </header>
      <GoogleMap
        defaultZoom={10}
        center = {{lat: 44.975918, lng: -93.273079 }}>
        {this.state.directions && <DirectionsRenderer directions = { this.state.directions } 
        panel= { document.getElementById('panel')}/>}
          <div id="panel">
          </div>
          <div>
        { /* loops through allDetoxInfoReducer to provide marker posistions with coordinates 
        and provides content for infowindow below*/ }
        {this.props.reduxState.allDetoxInfo.map(marker =>
            <div key={marker.detox_id}>
                <Marker 
                position = {
                    {
                    lat: Number(marker.lat),
                    lng: Number(marker.lng)
                    }
                    
                }
                // sets state to ensure infowindow matches marker, sets destination, sets fulladdress
                onClick = {() => this.setState({
                                isOpen: !this.state.isOpen,
                                activeMarker: marker.detox_id,
                                detox_id: marker.detox_id,
                                detox_center_name: marker.detox_center_name,
                                destination: {
                                    lat: marker.lat,
                                    lng: marker.lng
                                }
                        })
                }
                >
        {this.state.activeMarker === marker.detox_id &&
       
          <InfoWindow>
            <Card  className="infoWindow" key={marker.detox_id}>
                <h3>{marker.detox_center_name}</h3>
                { /* input makes it easy for a user to copy the address */ }
                <input defaultValue={marker.address}/>
                <h4>Beds Available:</h4>
                <h3>{Number(marker.total_bed_count) - Number(marker.current_bed_count)}</h3>
                <div>
                <Button 
                    size="small" 
                    variant="contained" 
                    color="primary"
                    onClick={() =>  this.displayDirections()
                    }
                    >
                Get Directions
                </Button> 
                </div>
            </Card>
          </InfoWindow> }
        </Marker>
         </div>
        )} 
      </div>
      </GoogleMap>
      </div>
    );
  }
}



const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(withScriptjs(withGoogleMap(AllDetoxCentersMapContainer)));



