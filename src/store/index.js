import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from "redux"
import {routerMiddleware} from "connected-react-router"
import createRootReducer from "../reducer"
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import rootSaga from "../sagas";

export const history = createBrowserHistory()

const SagaMiddleware = createSagaMiddleware();
const initialState ={}
const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            SagaMiddleware,
            createLogger()
        )
    )
)

SagaMiddleware.run(rootSaga);
export default store;