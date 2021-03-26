
import {combineReducers} from "redux";
import {authReducer} from "./auth/authReducer";
import {errorsReducer} from "./auth/messagesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    errorsReducer: errorsReducer
})