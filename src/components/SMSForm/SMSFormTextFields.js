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
        textColor: 'white',
    },
    cssLabel: {
         textColor: 'white',
      
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
    borderColor: 'white !important',
  },

});

class SMSFormTextFields extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div>
    <div>
        <InputLabel htmlFor="to"></InputLabel>
        <TextField
        type="tel" 
        name="to" 
        id="to"
        label= "To"
        value={this.props.to}
        onChange={this.props.onHandleChange}
        className={classes.textField}
        type="password"
        variant="outlined"
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
          margin="normal"
        />
        </div>
      <div>

        <InputLabel htmlFor="body"></InputLabel>
        <TextField
            disabled
            id = "outlined-multiline-static"
            multiline rows = "9"
            value = {this.props.body}
            name="body" 
            onChange={this.props.onHandleChange}
            variant="outlined"
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
          margin="normal"
        />
        </div>
    </div>
    );
  }
}

SMSFormTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SMSFormTextFields);