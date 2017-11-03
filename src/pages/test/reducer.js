const initState = {
    test: 'hello'
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case "SAVE_TALLY_BOOK":
            return { ...state, test: action.test };
        default:
            return state;
    }
};

export default { initState, reducer };
