import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import DialoguesReducer from "./DialoguesReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./AppReducer";


let reducers = combineReducers({
    messagesPage: DialoguesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

type RootReducerType = typeof reducers;
export type AppstateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppstateType, unknown, A>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store
