const currentBedCountById = (state = [], action) => {
    switch (action.type) {
        case 'SET_BED_COUNT':
            return action.payload;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.contacts
export default currentBedCountById;