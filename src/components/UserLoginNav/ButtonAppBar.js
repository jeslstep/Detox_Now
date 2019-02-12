import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const style = {
    root: {
        color: '#ffffff',
        backgroundColor: '#16233c',
        width: 100,
        margin: 8, 
    },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
       <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Welcome, { props.user.username }! 
          </Typography>
          <Button onClick={() => props.dispatch({ type: 'LOGOUT' })} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
     </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// get user info from state
const mapStateToProps = state => ({
    user: state.user,
});


export default withStyles(styles)(connect(mapStateToProps)(ButtonAppBar));