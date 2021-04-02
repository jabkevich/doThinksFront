import {
    GET_TASKS,
    GET_TASK,
    DEL_TASK,
    ADD_TASK,
    UPDATE_TASK,
    LOAD_TASKS,
    TASK_LOADED, OPEN_TASK, SWAP_TASKS, LOADING_TASK, CLEAR_DATA, SWAP_MINITASKS, OPEN_MINITASK, LOADING_POINT, CLOSE_TASK
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
export const clearData = () => (dispatch) => {
    dispatch({
        type:CLEAR_DATA
    })
}
export const delTask= (id) => (dispatch) =>{
    dispatch({
        type: CLOSE_TASK,
        payload: id
    })
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
    dispatch({
        type: LOADING_TASK,
            })
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

export const swapMiniTasks = (oldIndex, newIndex, miniTasks) => (dispatch) => {
    let  value = {
        "id": miniTasks[oldIndex].id,
        "point":  miniTasks[oldIndex].point,
        "title":  miniTasks[oldIndex].title,
        "deadline":  miniTasks[oldIndex].deadline,
        "other":  miniTasks[oldIndex].other,
        "text":  miniTasks[oldIndex].text,
        "priority": miniTasks[newIndex].priority,
        "owner":  miniTasks[oldIndex].owner,
        "group":  miniTasks[oldIndex].group
    }
    console.log(value)
    axios.put(URL + `/api/task/${miniTasks[oldIndex].id}/`, value).then(res => {

        }
    ).catch(err => console.log(err))
    value = {
        "id": miniTasks[newIndex].id,
        "point":  miniTasks[newIndex].point,
        "title":  miniTasks[newIndex].title,
        "deadline":  miniTasks[newIndex].deadline,
        "other":  miniTasks[newIndex].other,
        "text":  miniTasks[newIndex].text,
        "priority": miniTasks[oldIndex].priority,
        "owner":  miniTasks[newIndex].owner,
        "group":  miniTasks[newIndex].group
    }
    axios.put(URL + `/api/task/${miniTasks[newIndex].id}/`, value).catch(err => console.log(err))
    dispatch({
        type: SWAP_MINITASKS,
        payload: {oldIndex, newIndex}
    })
}

export const closeTask = (id) => (dispatch) => {
    dispatch({
        type: CLOSE_TASK,
        payload: id
    })
}

export const openMiniTask= (id) => (dispatch) =>{
    dispatch({
        type: LOADING_POINT,
    })
    axios.get(URL + `/api/task/?task=${id}`)
        .then(res => {
            dispatch({
                type: OPEN_MINITASK,
                payload: res.data

            })
        }).catch(err => console.log(err))
}