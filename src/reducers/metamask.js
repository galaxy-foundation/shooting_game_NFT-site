const initState = {
    username: "",
};

const metamaskReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};

export default metamaskReducer;
