import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { UserRegisterReducer } from "./reducers/UserRegisterReducer";

const reducer = combineReducers({
    UserRegisterReducer:UserRegisterReducer
})
const middleware = [thunk]

const store = createStore(reducer,applyMiddleware(...middleware))

export default store