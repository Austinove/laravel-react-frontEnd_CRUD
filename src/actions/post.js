import {postConstants} from "../constants"

export const fetchRequest =()=>{
    return{
        type: postConstants.FETCH_REQUEST
    }
}

export const fetchSuccess = (Posts) => {
    return {
        type: postConstants.FETCH_SUCCESS,
        payload: Posts
    }
}

export const fetchFailure = () => {
    return {
        type: postConstants.FETCH_FAILURE
    }
}

export const createRequest =(postData)=>{
    return{
        type: postConstants.CREATE_REQUEST,
        payload: postData
    }
}

export const createSuccess = (postData) => {
    return {
        type: postConstants.CREATE_SUCCESS,
        payload: postData
    }
}

export const createFailure =()=>{
    return{
        type: postConstants.CREATE_FAILURE
    }
}

export const removeRequest =(id)=>{
    return{
        type: postConstants.REMOVE_REQUEST,
        payload: id
    }
}

export const removeSuccess =(postData)=>{
    return{
        type: postConstants.REMOVE_SUCCESS,
        payload: postData
    }
}

export const removeFailure =()=>{
    return{
        type: postConstants.REMOVE_FAILURE
    }
}

export const updateRequest =(postData)=>{
    return{
        type: postConstants.UPDATE_REQUEST,
        payload: postData
    }
}

export const updateSuccess =(updateData)=>{
    return{
        type: postConstants.UPDATE_SUCCESS,
        payload: updateData
    }
}

export const updateFailure =()=>{
    return{
        type: postConstants.UPDATE_FAILURE
    }
}
