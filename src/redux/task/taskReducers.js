import {
    GET_TASKS,
    GET_TASK,
    DEL_TASK,
    ADD_TASK,
    UPDATE_TASK,
    LOAD_TASKS,
    LOAD_TASK, OPEN_TASK
} from "./types";

const initialState = {
    tasks: null,
    miniTasks: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS: {
            return {
                ...state,
                tasks: action.payload,
            }
        }
        case DEL_TASK: {
            if(state.tasks[0]){
                if(action.payload===state.tasks[0].group){
                    state.tasks=[]
                    state.point = []
                }
            }

            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        }
        case ADD_TASK: {
            return {
                ...state,
               tasks: [...state.tasks, action.payload]
            }
        }
        case OPEN_TASK: {
            return {
                ...state,
               miniTask: action.payload
            }
        }
        default:
            return state
    }
}