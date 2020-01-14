import { all } from "redux-saga/effects";
import loginSaga from "./login"
import postSaga from "./post"
export default function* rootSaga(getState) {
    yield all([
        loginSaga(),
        postSaga()
    ]);
}
