const detoxLatLng = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETOX_LAT_LNG':
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.contacts
export default detoxLatLng;