const visibilityFilter = (state = 0, action) => {
    switch (action.type) {
        case 'SET_ONE':
            return 1;
        case 'SET_TWO':
            return 2;
        default:
            return state;
    }
};

export default visibilityFilter;
