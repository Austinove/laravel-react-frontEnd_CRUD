import { all, takeEvery, fork, put, call } from "redux-saga/effects"
import { postConstants, BASE_URL } from "../constants"
import { fetchSuccess, 
    createSuccess, 
    removeSuccess, 
    updateSuccess, 
    fetchFailure, 
    createFailure, 
    removeFailure,
    updateFailure
} from "../actions/post"

function* updatePosts({payload}){
    const {id, title, post} = payload

    try {
        const updateData = yield call(fetch, `${BASE_URL}/api/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const updatedPosts = updateData.json();
        yield put(updateSuccess(updatedPosts))
    } catch (error) {
        console.log(error)
        yield put(updateFailure());
    }
}
function* removePosts({payload}) {
    const {id}= payload

    try {
        const postData = yield call(fetch, `${BASE_URL}/api/${id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(payload)
        })

        yield put(removeSuccess(postData))
    } catch (error) {
        console.log(error)
        yield put(removeFailure())
    }
}
function* createPosts({payload}) {
    try {
        const response = yield call(fetch, `${BASE_URL}/api/posts/store`, {
            method: "POST",
            headers: {
                // "Content-Type": "application/json"
            },
            body: payload
        });
        if(!response){
            throw new Error("No list found")
        }
        const postData = yield response.json();
        yield put(createSuccess(postData))

    } catch (error) {
        console.log(error)
        yield put(createFailure())
    }
}
function* fetchPosts() {
    const Posts = "reached saga"; 
    try {
        const postsFetch = yield call(fetch, `${BASE_URL}/api/posts`);
        const Posts = yield postsFetch.json();
        yield put(fetchSuccess(Posts));
    } catch (e) {
        console.log("Error from server -> ",e)
        yield put(fetchFailure);
    }

    
}
export function* updateRequest(){
    yield takeEvery(postConstants.UPDATE_REQUEST, updatePosts)
}
export function* removeRequest() {
    yield takeEvery(postConstants.REMOVE_REQUEST, removePosts)
}
export function* createRequest() {
    yield takeEvery(postConstants.CREATE_REQUEST, createPosts)
}
export function* fetchRequest() {
    yield takeEvery(postConstants.FETCH_REQUEST, fetchPosts)
}
export default function* rootSaga(){
    yield all([
        fork(fetchRequest),
        fork(createRequest),
        fork(removeRequest),
        fork(updateRequest)
    ])
}

