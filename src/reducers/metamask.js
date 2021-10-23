const initState = {
    metamaskState: false
}

const metamaskReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CHANGE_METAMASKSTATE':
            return {
                ...state,
                metamaskState: action.payload
            }
        default:
            return state    
    }
}

export default metamaskReducer;