import React, {Component} from "react";
import {connect} from 'react-redux';
import DetoxCenterLoginMapMarker from './DetoxCenterLoginMapMarker';
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";


class DetoxCenterMapContainer extends Component {

render (){

    return (
      <GoogleMap
        defaultZoom={10}
        center = {{ lat: 44.975918, lng: -93.273079}}
        >
        <DetoxCenterLoginMapMarker/>
      </GoogleMap>
    );
  }
}

const mapreduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapreduxStateToProps)(withScriptjs(withGoogleMap(DetoxCenterMapContainer)));



