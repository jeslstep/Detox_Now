
import React, {Component} from "react";
import {connect} from 'react-redux';

// google maps api 
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

// material ui
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

// material ui style override 
const style = {
    root1: {
        color: '#ffffff',
        backgroundColor: '#ce0019',
        margin: 8,
        width: 100,
    },
};


class AllDetoxCentersMapContainer extends Component {

    // get registered detox center info as soon as possible 
    componentDidMount() {
          this.getAllDetoxInfo();
      }

    // getAllDetoxInfo dispatches a call to get detox info
    getAllDetoxInfo = (event) => {
          this.props.dispatch({
              type: 'GET_DETOX_INFO'
          });
      }

    state = {
        detox_center_name: '',
        isOpen: false,
        activeMarker: null,
        detox_id: 0

    }


 

render (){
    return (
        <div>
        <GoogleMap
            defaultZoom={10}
            center = {{lat: 44.975918, lng: -93.273079 }}>
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
                    <center>
                    <h3>{marker.detox_center_name}</h3>
                    <h4>Beds Available:</h4>
                    <h3>{Number(marker.total_bed_count) - Number(marker.current_bed_count)}</h3>
                    <div>
                    <Button 
                        size="small" 
                         style = {
                             style.root1
                         }
                         href = {
                             'https://www.google.com/maps/search/' + marker.detox_center_name + '/@' +
                             marker.lat + '/' + marker.lng
                         }
                        >
                    Get a Bed
                    </Button> 
                    </div>
                    </center>
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



