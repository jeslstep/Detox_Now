import React from 'react';
import { connect } from 'react-redux';
import AboutPageNav from '../AboutPageNav/AboutPageNav';
import Card from '@material-ui/core/Card';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const AboutPage = (props) => (
  <div>
    <AboutPageNav/>
    <h1>
      Welcome!
    </h1>
    <div align="center">
    <Card className="card4">
     <h2>Problems</h2>
     <ul>
       <li>Arriving at a detox center where all the beds are taken</li>
       <li>For those who help get people to a detox center, it is often difficult to find the intoxicated person calling for help.</li>
     </ul>
     </Card>
     <Card className="card4">
    <h2>Provides</h2>
    <ul>
      <li>Provide directions to people with addiction, and those who help them, to the registered detox center with the most amount of beds available</li>
      <li>Display how many beds are available and get directions to the regitered detox centers of their chosing.</li>
      <li>Allow registered detox centers to share how many beds they have available</li>
      <li>Allow anyone who has registered to send their current location to a contact for help getting to a detox center</li>
    </ul>
    </Card>
    <Card className="card4">
    <h2>Technology Used</h2>
    <ul>
      <li>React.js</li>
      <li>Redux.js</li>
      <li>Node.js</li>
      <li>Google Maps API - react-google-maps, react-geocode</li>
      <li>Twilio API- sending SMS</li>
      <li>Material UI</li>
      <li>Express</li>
      <li>CSS</li>
      <li>Passport</li>
    </ul>
    </Card>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AboutPage);
