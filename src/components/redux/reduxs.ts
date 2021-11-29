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

type RootReducerType = typeof reducers;
export type AppstateType = ReturnType<RootReducerType>  

type PropertiesType<T> = T extends {[key:string]: infer U} ? U : never 

export type InferActionsTypes<T extends {[key:string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store
