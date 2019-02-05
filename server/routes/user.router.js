const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'google',
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.GOOGLE_MAPS_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const clearance_level = req.body.clearance_level;
  console.log(req.body)
  const queryText = 'INSERT INTO person (username, password, clearance_level ) VALUES ($1, $2, $3) RETURNING id';
  pool.query(queryText, [username, password, clearance_level])
    .then((result) => { 
      if (clearance_level === 2){
      const detox_id = result.rows[0].id;
      const detox_center_name = req.body.detox_center_name;
      const address = req.body.address;
      const city = req.body.city;
      const state = req.body.state;
      const zip = req.body.zip;
      const total_bed_count = req.body.total_bed_count;
      const current_bed_count = 0;
      console.log(address);
      // convert addreass to coordinates
      geocoder.geocode(address, function (err, geocoderres) {
        const lat = geocoderres[0].latitude
        const lng = geocoderres[0].longitude
               console.log('lat:', lat, 'lng:', lng);
            const queryText2 = `INSERT INTO detox (detox_id, detox_center_name, address, city, state, zip, total_bed_count,
        current_bed_count, lat, lng ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
      pool.query(queryText2, [detox_id, detox_center_name, address, city, state, zip, total_bed_count, current_bed_count, lat, lng])
      .then ((result) => {
        res.sendStatus(201); 
      })
     .catch((err) => {
       console.log(err);
       res.sendStatus(500);
     });
    })
  } // end conditional  
}).then((result) => {
  res.sendStatus(201);
})
.catch((err)=> {
      console.log(err);
      res.sendStatus(500);
})})

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
