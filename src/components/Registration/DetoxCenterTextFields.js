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

class DetoxCenterTextFields extends React.Component {


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
                <div>
                    <InputLabel htmlFor="detox_center_name"></InputLabel>
                    <TextField
                    id="standard-detox_center_name-input"
                    label="Name of Detox Center"
                    className={classes.textField}
                    type="detox_center_name"
                    variant="outlined"
                    value = {
                    this.props.detox_center_name
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
                    onChange = { this.props.handleInputChangeFor('detox_center_name') }
                    margin="normal"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="address"></InputLabel>
                    <TextField
                    id="standard-address-input"
                    label="Address"
                    className={classes.textField}
                    type="address"
                    variant="outlined"
                    value = {
                    this.props.address
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
                    onChange = { this.props.handleInputChangeFor('address') }
                    margin="normal"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="city"></InputLabel>
                    <TextField
                    id="standard-city-input"
                    label="City"
                    className={classes.textField}
                    type="city"
                    variant="outlined"
                    value = {
                    this.props.city
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
                    onChange = { this.props.handleInputChangeFor('city') }
                    margin="normal"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="state"></InputLabel>
                    <TextField
                    id="standard-state-input"
                    label="State"
                    className={classes.textField}
                    type="state"
                    variant="outlined"
                    value = { this.props.state.state }
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
                    onChange = { this.props.handleInputChangeFor('state') }
                    margin="normal"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="zip"></InputLabel>
                    <TextField
                    id="standard-zip-input"
                    label="Zip"
                    className={classes.textField}
                    type="zip"
                    variant="outlined"
                    value = {
                    this.props.zip
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
                    onChange = { this.props.handleInputChangeFor('zip') }
                    margin="normal"
                    />
                </div>
                <div>
                    <InputLabel htmlFor="total_bed_count"></InputLabel>
                    <TextField
                    id="standard-total_bed_count-input"
                    label="Total Bed Count"
                    className={classes.textField}
                    type="total_bed_count"
                    variant="outlined"
                    value = {
                    this.props.total_bed_count
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
                    onChange = { this.props.handleInputChangeFor('total_bed_count') }
                    margin="normal"
                    />
                </div>
        </div>
        );
    }
}

DetoxCenterTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetoxCenterTextFields);