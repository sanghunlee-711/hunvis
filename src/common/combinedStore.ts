import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { postReducer } from "../pages/Post/state/index";
import { navReducer } from "../pages/Nav/state/index";
import postSaga from "../pages/Post/state/saga";
import navSaga from "../pages/Nav/state/saga";
const reducer = combineReducers({
  post: postReducer,
  nav: navReducer,
});

const sagaMiddleWare = createSagaMiddleware();

console.log("Here sis Combined");
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

export default store;

sagaMiddleWare.run(postSaga);
sagaMiddleWare.run(navSaga);
