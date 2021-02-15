import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    LOAD_USER,
    DATA_USER,
    ADD_GROUP,
    USER_LOADING,
    DELETE_GROUP,
    OPEN_GROUP, UPDATE_TASK
} from "./types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    groupsUser: [],
    loading: true,
    groupTasks: []
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
                groupsUser: []

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
                ...state,
                groupsUser: [...state.groupsUser, action.payload]
            }
        }
        case DELETE_GROUP:
            return {
                ...state,
                groupsUser: state.groupsUser.filter(groupsUser => groupsUser.id !== action.payload)
            }
        case OPEN_GROUP:
            for(let i = 0; i<state.groupsUser.length; i++){
                if(state.groupsUser[i].id === action.payload){
                    state.groupTasks = state.groupsUser[i].task
                }
            }
            return {
                ...state,
                groupTasks: [...state.groupTasks]
            }
        case UPDATE_TASK:
            for(let i = 0; i<state.groupsUser.length; i++){
                if(state.groupTasks[i].id === action.payload && (
                    (state.groupsUser[i].title !== action.payload.title)||
                    (state.groupsUser[i].deadline !== action.payload.deadline)||
                    (state.groupsUser[i].group !== action.payload.group)||
                    (state.groupsUser[i].other !== action.payload.other)||
                    (state.groupsUser[i].point !== action.payload.point)||
                    (state.groupsUser[i].priority !== action.payload.priority)||
                    (state.groupsUser[i].text !== action.payload.text)||
                    (state.groupsUser[i].title !== action.payload.title)
                )
                ){
                    (state.groupsUser[i].title = action.payload.title)
                    (state.groupsUser[i].deadline = action.payload.deadline)
                    (state.groupsUser[i].group = action.payload.group)
                    (state.groupsUser[i].other = action.payload.other)
                    (state.groupsUser[i].point = action.payload.point)
                    (state.groupsUser[i].priority = action.payload.priority)
                    (state.groupsUser[i].text = action.payload.text)
                    (state.groupsUser[i].title = action.payload.title)
                }
            }
            return {
                ...state,
                groupsUser: [...state.groupsUser]
            }


        default:
            return state
    }
}