const initialState = {
    data: [],
}

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case 'DATA_DUMMY':
            return {
                ...state,
                data: action.payload
            }     
            
        default:
            return state
    }
}