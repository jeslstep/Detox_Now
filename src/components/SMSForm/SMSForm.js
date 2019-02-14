import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SMSForm.css';

// material ui
import Button from '@material-ui/core/Button';
import dtnow_skline_mobile from '../LandingPage/dtnow_skline_mobile.svg';

// google maps api
import Geocode from "react-geocode";
// google api key needed
import GOOGLE_MAPS_API_KEY from '../api_key';
import SMSFormTextFields from './SMSFormTextFields';
import ButtonAppBar from '../UserLoginNav/ButtonAppBar';
Geocode.setApiKey(GOOGLE_MAPS_API_KEY);


// material ui style override 
const style = {
    root: {
      color: '#ffffff',
      backgroundColor: '#16233c',
      margin: 8,
      width: 300,
    },
  };



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
            body: 'A message containing your username, phone number and current location will appear here.'
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
                                             body: `From: ${this.props.user.username},
                                           
                                             Phone Number: ${this.props.user.number},

                                             Message: I need help getting to a detox center, can you come get me here: ${address}`
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
        // event.preventDefault();
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
               ...this.state.message,
               to: ''
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
        <ButtonAppBar/>
              <section className="App-header">
              <div>
                {/* city skylinee outline image in current directory */}
                <img 
                  src={dtnow_skline_mobile} 
                  alt="city outline"/>
              </div>
        </section>
        <section className="grayBackground">
         <h1 className="whitetext">Message for Help</h1>
            <SMSFormTextFields 
              onHandleChange = { this.onHandleChange }
              to = { this.state.message.to }
            />
            <br/>
            <section>
                <center>
                    <div className="container3">
                    <div  className="mission" >
                    <h3 className="whitetext">
                      {this.state.message.body}
                    </h3>
                    </div>
                    </div>
                </center>
            </section>
            <br/>
            <div>
              <Button 
                
                  size="large"
                  style={style.root}
                  disabled={this.state.submitting}
                  onClick={this.onSubmit} >
              Send Message
              </Button>
            </div>
       </section>
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SMSForm);