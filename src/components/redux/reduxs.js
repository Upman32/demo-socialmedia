import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import DialoguesReducer from "./DialoguesReducer";
import profileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    messagesPage:DialoguesReducer,
    profilePage: profileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store
