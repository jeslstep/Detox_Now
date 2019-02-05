const detoxInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETOX_INFO':
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.contacts
export default detoxInfo;