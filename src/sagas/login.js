import{ all, takeEvery, fork, put, call } from "redux-saga/effects"
import { loginconstants, BASE_URL} from "../constants"
import {loginSuccess, loginFailure} from "../actions/login"

function* loginUser({payload}){
    const {username, password} = payload

    try {
        const response = yield call(fetch, `${BASE_URL}/api/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        if (!response) {
            throw new Error("User Not Found")
        }
        const userData = response.json()
        yield put(loginSuccess(userData))

    } catch (error) {
        console.log(error)
        yield put(loginFailure())
    }
    yield put(loginSuccess(username))
}
export function* loginRequest(){
    yield takeEvery(loginconstants.LOGIN_REQUEST, loginUser)
}
export default function* rootSaga(){
    yield all([
        fork(loginRequest)
    ])
}