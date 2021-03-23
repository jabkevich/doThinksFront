
import {combineReducers} from "redux";
import {authReducer} from "./auth/authReducer";
import {errorReducer} from "./auth/errorsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    messagesReducer: errorReducer
})