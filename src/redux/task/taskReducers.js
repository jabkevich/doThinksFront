import {
    GET_TASKS,
    GET_TASK,
    DEL_TASK,
    ADD_TASK,
    UPDATE_TASK,
    LOAD_TASKS,
    TASK_LOADED,
    LOADING_TASK,
    OPEN_TASK,
    SWAP_TASKS
} from "./types";
import arrayMove from 'array-move';
const initialState = {
    tasks: null,
    miniTasks: null,
    taskLoaded: false
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS: {
            return {
                ...state,
                tasks: action.payload,
                taskLoaded: true,
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
               miniTasks: action.payload
            }
        }
        case SWAP_TASKS: {
            return {
                ...state,
               tasks:arrayMove(state.tasks, action.payload.oldIndex, action.payload.newIndex)
            }
        }
        default:
            return state
    }
}