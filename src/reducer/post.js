import {postConstants} from "../constants"

const initialState={
    isLoading: false,
    postData: [],
    error: ""
}

export function posts (state=initialState, action){
    switch (action.type) {
        case postConstants.FETCH_REQUEST:
            return{
                ...state,
                isLoading: true
            }

            case postConstants.FETCH_SUCCESS:
            return{
                ...state,
                isLoading: false,
                postData: action.payload
            }

            case postConstants.FETCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: "An error occuired"
            }

        case postConstants.CREATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case postConstants.CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                postData: action.payload
            }

        case postConstants.CREATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "An error occuired"
            }

        case postConstants.REMOVE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case postConstants.REMOVE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                postData: action.payload
            }

        case postConstants.REMOVE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "An error occuired"
            }

        case postConstants.UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case postConstants.UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                postData: action.payload
            }

        case postConstants.UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: "An error occuired"
            }
    
        default:
            return state
    }
}