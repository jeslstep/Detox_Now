const currentLocation = (state = [], action) => {
     console.log('in currentLocationReducer', action.payload)
    switch (action.type) {
        case 'SET_CURRENT_LOCATION':
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.contacts
export default currentLocation;