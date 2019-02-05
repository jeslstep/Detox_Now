import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'react-google-maps';
import Card from '@material-ui/core/Card';


class DetoxCenterLoginMapMarker extends Component {

    componentDidMount() {
      this.getAllDetoxInfo();
    }

    // getContacts dispatches a call to get contacts 
    getAllDetoxInfo = (event) => {
      this.props.dispatch({
        type: 'GET_DETOX_INFO'
      });
    }

  state = {
    isOpen: false,
    activeMarker: null
  }

  markerClick = (detox_id) => {
    console.log('markerClick', this.state);
    this.setState({
      isOpen: !this.state.isOpen,
      activeMarker: detox_id
    })
  }
  
  render() {
    return (
      <div>
         {this.props.reduxState.allDetoxInfo.map(marker =>
        <Marker 
          key={marker.detox_id}
          position = {{lat: Number(marker.lat),lng: Number(marker.lng)}}
          onClick={() => this.markerClick(marker.detox_id)}
        >
        {this.state.activeMarker === marker.detox_id &&
          <InfoWindow>
            <Card key={marker.detox_id}>
             <h3>{marker.detox_center_name}</h3>
             <h4>Available Beds:</h4>
             <h3>{Number(marker.total_bed_count) - Number(marker.current_bed_count)}</h3>
				     <h4>Occupied Beds:</h4>
             <h3>{marker.current_bed_count}</h3>
            </Card>
          </InfoWindow> }
        </Marker>
        )} 
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(DetoxCenterLoginMapMarker);