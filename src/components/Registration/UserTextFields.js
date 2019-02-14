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

class UserTextFields extends React.Component {


render() {
    const { classes } = this.props;
        return (
            <div>
                <div>
                    <InputLabel htmlFor="username"></InputLabel>
                    <TextField
                        id="standard-name"
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
                </div>
                <div>
                    <InputLabel htmlFor="number"></InputLabel>
                    <TextField
                    id="standard-password-input"
                    label="Phone Number"
                    className={classes.textField}
                    type="phone number"
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
                    onChange = { this.props.handleInputChangeFor('number') }
                    margin="normal"
                    />
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

UserTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTextFields);