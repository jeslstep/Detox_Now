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
      borderColor: `white !important`,

    }
  },

  cssFocused: {
    color: 'white !important'
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
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
        label = "To"
        type = "tel"
        name = "to"
        id = "to"
        value={this.props.to}
        onChange={this.props.onHandleChange}
        className={classes.textField}
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