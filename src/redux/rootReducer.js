
import {combineReducers} from "redux";
import {authReducer} from "./auth/authReducer";
import {errorsReducer} from "./auth/messagesReducer";
import {taskReducer} from "./task/taskReducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    errorsReducer: errorsReducer,
    taskReducer: taskReducer
})