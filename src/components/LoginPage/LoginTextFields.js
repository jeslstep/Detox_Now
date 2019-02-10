import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
     
    },
    cssLabel: {
        color: 'white',
        textAlign: 'center',
      
    },
    cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `${theme.palette.primary.main} !important`,
    }
  },

  cssFocused: {
   
  },
  notchedOutline: {

    borderWidth: '1px',
    borderColor: 'white !important'
  },

});

const textArea = {
  textAlign: 'center',
};

class LoginTextFields extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
          <div>
            <form>
        <InputLabel htmlFor="username"></InputLabel>
        <TextField
        id="standard-name"
        style={textArea}
        label="Username"
        variant="outlined"
        className={classes.textField}
          value = {
            this.props.username
          }
        InputLabelProps = {{
            classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
                },
               }
           }
        InputProps = {{
                classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
        }}}
          onChange={this.props.handleInputChangeFor('username')}
          margin="normal"
        />
          </form>
    </div>
    <div>
        <InputLabel htmlFor="password"></InputLabel>
        <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        variant="outlined"
        value = {
          this.props.password
        }
        InputLabelProps = {{
                   classes: {
                       root: classes.cssLabel,
                       focused: classes.cssFocused,
                   },
               }
           }
        InputProps = {{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
           
                          
        }}}
          onChange = { this.props.handleInputChangeFor('password') }
          margin="normal"
        />
        </div>
      </div>
    );
  }
}

LoginTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginTextFields);