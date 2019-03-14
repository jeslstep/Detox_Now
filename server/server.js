
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const detoxCenterRouter = require('./routes/detoxCenter.router');
const twilioRouter = require('./routes/twilio.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/detox', detoxCenterRouter);
app.use('/api/messages', twilioRouter);

// Serve static files
app.use(express.static('build'));

/** ---------- keep app awake on heroku ---------- **/
const http = require("http");

setInterval(function () {
  http.get("https://blooming-earth-36039.herokuapp.com/#/home");
}, 3000000); // every 50 minutes (3000000)

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
