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
    SWAP_TASKS,
    CLEAR_DATA,
    SWAP_MINITASKS,
    OPEN_MINITASK,
    LOADING_POINT,
    CLOSE_TASK
} from "./types";
import arrayMove from 'array-move';
const initialState = {
    tasks: null,
    miniTasks: null,
    taskLoaded: false,
    miniTasksLoad: false,
    miniTasksLoading: false,
    points: null,
    loadPoints: null,
    pointsLoading: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWAP_MINITASKS: {
            return {
                ...state,
                miniTasks: arrayMove(state.miniTasks, action.payload.oldIndex, action.payload.newIndex),
            }
        }
        case CLOSE_TASK: {
            console.log(state.miniTasks[0].group)
            console.log(action.payload)
          if(action.payload===state.miniTasks[0].group){
              return {
                  ...state,
                  miniTasks: null,
                  miniTasksLoad: false,
              }
          }
            return {
                state
            }
        }
        case LOADING_POINT: {
            return {
                ...state,
                pointsLoading: true
            }
        }
        case OPEN_MINITASK: {
            return {
                ...state,
                points: action.payload,
                loadPoints: true,
            }
        }
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
        case LOADING_TASK: {
            return {
                ...state,
                miniTasksLoad: false,
                miniTasksLoading: true
            }
        }
        case OPEN_TASK: {
            return {
                ...state,
                miniTasks: action.payload,
                miniTasksLoad: true,
                miniTasksLoading: false
            }
        }
        case SWAP_TASKS: {
            return {
                ...state,
               tasks:arrayMove(state.tasks, action.payload.oldIndex, action.payload.newIndex)
            }
        }
        case CLEAR_DATA: {
            return {
                ...state,
                tasks: null,
                miniTasks: null,
                taskLoaded: false,
                miniTasksLoad: false,
                miniTasksLoading: false,
            }
        }
        default:
            return state
    }
}