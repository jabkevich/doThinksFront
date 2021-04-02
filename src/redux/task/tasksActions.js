import {
    GET_TASKS,
    GET_TASK,
    DEL_TASK,
    ADD_TASK,
    UPDATE_TASK,
    LOAD_TASKS,
    TASK_LOADED, OPEN_TASK, SWAP_TASKS, LOADING_TASK
} from "./types";
import axios from "axios";
const URL = "http://127.0.0.1:8000"

export const getTasks = () => (dispatch, getState) => {
    const user = getState().auth.user;
    axios.get(URL + `/api/group/?owner=${user["id"]}`)
        .then(res => {
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        }).catch(err => (console.log(err)));
}
export const delTask= (id) => (dispatch) =>{
    axios.delete(`http://127.0.0.1:8000/api/group/${id}`)
        .then(res => {
            dispatch({
                type: DEL_TASK,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const addTask =  (title, owner) => (dispatch)  =>{
    axios.post(`${URL}/api/group/`, {title: title["taskName"], owner: owner})
        .then(res => {
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const openTask = (id) => (dispatch) =>{
    axios.get(URL + `/api/task/?group=${id}`)
        .then(res => {
            dispatch({
                type: OPEN_TASK,
                payload: res.data

            })
        }).catch(err => console.log(err))
}
export const swapTasks = (oldIndex, newIndex, taskss) => (dispatch) => {
    let  value = {
        "id": taskss[oldIndex].id,
        "task": taskss[oldIndex].task,
        "title": taskss[oldIndex].title,
        "priority": newIndex,
        "owner": taskss[oldIndex].owner
    }
    console.log(value)
    axios.put(URL + `/api/group/${taskss[oldIndex].id}/`, value).then(res => {

        }
    ).catch(err => console.log(err))
    value = {
        "id": taskss[newIndex].id,
        "task": taskss[newIndex].task,
        "title": taskss[newIndex].title,
        "priority": oldIndex,
        "owner": taskss[newIndex].owner
    }
    axios.put(URL + `/api/group/${taskss[newIndex].id}/`, value).catch(err => console.log(err))
    dispatch({
        type: SWAP_TASKS,
        payload: {oldIndex, newIndex}
    })
}