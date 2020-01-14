import  {loginconstants} from "../constants"

export const loginRequest =(loginData)=>{
    return{
        type: loginconstants.LOGIN_REQUEST,
        payload: loginData
    }
}

export const loginSuccess = (userDetails) => {
    return {
        type: loginconstants.LOGIN_SUCCESS,
        payload: userDetails
    }
}

export const loginFailure = () => {
    return {
        type: loginconstants.LOGIN_FAILURE
    }
}