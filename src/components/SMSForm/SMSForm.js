import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SMSForm.css';

// material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';

// google maps api
import Geocode from "react-geocode";
// google api key needed
import GOOGLE_MAPS_API_KEY from '../api_key';
Geocode.setApiKey(GOOGLE_MAPS_API_KEY);



class SMSForm extends Component {

  // get location as soon as possible
  componentDidMount() {
    this.getGeoLocation();
  }

  // state storing message with number and current location 
  constructor(props) {
      super(props);
      this.state = {
          message: {
            to: '',
            body:  'Your current location will appear here'
          },
          submitting: false,
          error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  }

  // captures users current location 
  getGeoLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  // sets current location coordinates latituude and longitude
                  console.log('lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
                          // convert coordinates to address
                          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                              response => {
                                  const address = response.results[0].formatted_address;
                                  console.log(address);
                                    // sets message body into set
                                    this.setState({
                                         message: {
                                             body: `From: ${this.props.user.username}, ${this.props.user.number}
                                             I need help getting to a detox center, can you come get me here: ${address}`
                                         }
                                     });
                              },
                              error => {
                                  console.error(error);
                              }
                          );
                  }
              )
          } else {
              alert('Location services not supported by your browser');
          }
      }
  
  // captures user input
  onHandleChange(event) {
       const name = event.target.getAttribute('name');
       this.setState({
           message: { ...this.state.message,
               [name]: event.target.value
           }
       });
   }
  
  // when the send message button is clicked, send information to server to make twilio api request
  onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/api/messages', {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
          alert("Message Sent");
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  render() {
    return (
      <div>
        <div align = "center">
          <Card className="card4">
              <form onSubmit={this.onSubmit} className={this.state.error ? 'error sms-form' : 'sms-form'}>
                <div className="sms-form div">
                  <InputLabel className = "sms-form label" htmlFor="to">To:</InputLabel>
                  < TextField
                    className="sms-form label"
                    type="tel" 
                    name="to" 
                    id="to"
                    value={this.state.message.to}
                    onChange={this.onHandleChange}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="body">Body:</InputLabel>
                  <TextField
                    disabled
                    id = "outlined-multiline-static"
                    multiline rows = "9"
                    value = {this.state.message.body}
                    name="body" 
                    onChange={this.onHandleChange}
                    />
                </div>
                <Button variant="raised" color="primary" className = "sms-form button" type="submit" disabled={this.state.submitting}>
                  Send Message
                </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SMSForm);