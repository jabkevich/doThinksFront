import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    LOAD_USER,
    DATA_USER,
    ADD_GROUP,
    USER_LOADING,
    DELETE_GROUP,
    OPEN_GROUP, UPDATE_TASK,
    ADD_TASK,
    DEL_TASK, UPDATE_TASK_LIST, UPDATE_POINT_LIST, GET_POINT_LIST, ADD_POINT, DEL_POINT
} from "./types";
import {arrayMove} from "react-sortable-hoc";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    groupsUser: [],
    loading: true,
    groupTasks: [],
    openTasks: null,
    point: []
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_USER: {
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            }
        }
        case LOGOUT_USER:
        case INVALID_TOKEN:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                loading: true,
                groupsUser: [],
                groupTasks: [],
                point: []

            }
        case LOAD_USER: {
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        }
        case DATA_USER: {
            return {
                ...state,
                groupsUser: action.payload,
            }
        }
        case ADD_GROUP: {
            return {
                ...state, groupsUser: [...state.groupsUser, action.payload]
            }
        }
        case DELETE_GROUP:
            if(action.payload===state.openTasks){
                state.openTasks=null
            }
            if(state.groupTasks[0]){
                if(action.payload===state.groupTasks[0].group){
                    state.groupTasks=[]
                    state.point = []
                }
            }

            return {
                ...state,
                groupsUser: state.groupsUser.filter(groupsUser => groupsUser.id !== action.payload)
            }
        case OPEN_GROUP:
            console.log(action.payload)
            return {
                ...state,
                groupTasks: action.payload.tasks || [],
                openTasks: action.payload.id
            }
        case ADD_TASK:
            return {
                ...state,
                groupTasks: [...state.groupTasks, action.payload]
            }
        case DEL_TASK:
            return {
                ...state,
                groupTasks: state.groupTasks.filter(groupTask => groupTask.id !== action.payload)
            }
        case UPDATE_TASK:
            for(let i = 0; i<state.groupTasks.length; i++){
                if (state.groupTasks[i].id === action.payload.id) {
                    state.groupTasks[i].priority = action.payload.priority
                }
            }
            state.groupTasks = state.groupTasks.sort(function (a, b) {
                return a.priority - b.priority;
            });
            return {
                ...state,
                groupTasks: state.groupTasks
            }
        case UPDATE_TASK_LIST:
            return {
                ...state,
                groupTasks: arrayMove(state.groupTasks, action.payload.oldIndex, action.payload.newIndex)
            }
        case GET_POINT_LIST:
            return {
                ...state,
                point: action.payload
            }
        case UPDATE_POINT_LIST:

            return {
                ...state,
                point: arrayMove(state.point, action.payload.oldIndex, action.payload.newIndex)
            }
        case ADD_POINT:
            return {
                ...state,
                point: [...state.point, action.payload]
            }
        case DEL_POINT:
            return {
                ...state,
                point: state.point.filter(groupTask => groupTask.id !== action.payload)
            }
        default:
            return state
    }
}