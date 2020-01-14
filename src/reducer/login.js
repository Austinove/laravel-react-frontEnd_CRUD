import {loginconstants} from "../constants"

const initialState={
    isLoading: false,
    userData: [],
    error: ""
}

export function login (state=initialState, action){
    switch (action.type) {
        case loginconstants.LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }

        case loginconstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload
            }

        case loginconstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "An error occuired"
            }
    
        default:
            return state
    }
}