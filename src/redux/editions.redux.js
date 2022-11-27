const INITIAL_STATE = {
    editions: [],
    isLoading: false,
    error: false
}

const editionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'gettingEditions':
            return{...state, isLoading: true, error: false};
        case 'getEditions':
            return{...state, isLoading: false, editions: action.payload, error: false};
        case 'errorEditions':
            return{...state, isLoading: false, editions: [], error: action.payload}

        default: return state
    }
}

export default editionsReducer