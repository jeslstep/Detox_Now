import React, {Component} from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import DetoxNow from '../DetoxNow/DetoxNow';
import AllDetoxCentersMap from '../AllDetoxCentersMap/AllDetoxCentersMap';
import AboutPage from '../AboutPage/AboutPage';
import UserLogin from '../UserLogin/UserLogin';
import SMSForm from '../SMSForm/SMSForm';
import DetoxCenterLogin from '../DetoxCenterLogin/DetoxCenterLogin';
import DetoxCenterLoginMap from '../DetoxCenterLogin/DetoxCenterLoginMap';
import './App.css';


class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
     // get destination 
     this.getDetoxWithMostBedsAvailable();
  }

    // getDetoxWithMostBedsAvailable dispatches a call to find the detox with the most beds available
    getDetoxWithMostBedsAvailable = (event) => {
      this.props.dispatch({
        type: 'GET_DETOX_WITH_LOWEST_BED_COUNT'
      });
      // get current location 
      this.getGeoLocation();
    }

// captures users current location and sets coords to reduxstate
getGeoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('in getGeoLoaction', 'lat: ', position.coords.latitude, 'lng:', position.coords.longitude)
        this.props.dispatch({
          type: 'SET_CURRENT_LOCATION',
          payload: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
        console.log('found current location', 'lat:', position.coords.latitude,
          'lng:', position.coords.longitude);
      }
    )
  } else {
    console.log('Location services not supported by your browser');
    // try again
    this.getGeoLocation();
  }
}
  

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path= "/detoxnowdefault"
              component={DetoxNow}
            />
             <Route
              exact
              path= "/about"
              component={AboutPage}
            />
              <Route
              exact
              path= "/detoxnowmap"
              component={AllDetoxCentersMap}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
             <ProtectedRoute
              exact
              path="/home"
              // page user sees when they log in
              component={UserLogin}
              // page detox center sees when they log in
              component2={DetoxCenterLogin}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute
              exact
              path="/smsform"
              component={SMSForm}
            />
             <ProtectedRoute
              exact
              path="/detoxmap"
              component={DetoxCenterLoginMap}
            />
            {/* If none of the other routes matched, we will show a 404. */}
             {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          {/* <Footer/> */}
        </div>
        
      </Router>
      
  )}
}

export default connect()(App);
