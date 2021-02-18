import {
    LOGIN_USER,
    LOGOUT_USER,
    INVALID_TOKEN,
    DATA_USER,
    ADD_GROUP,
    LOAD_USER,
    USER_LOADING,
    DELETE_GROUP,
    OPEN_GROUP,
    UPDATE_TASK,
    ADD_TASK,
    DEL_TASK,
    UPDATE_TASK_LIST,
    GET_POINT_LIST,
    UPDATE_POINT_LIST,
    UPDATE_POINT,
    ADD_POINT,
    DEL_POINT
} from "./types";
import axios from "axios";

const URL = "http://127.0.0.1:8000"

export const login = (username, password) => dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify({username, password})

    axios.post(URL + '/auth/token/login/', body, config).then(res => {
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))

}
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING})
    axios.get(URL + '/auth/users/me/', tokenConfig(getState)).then(res => {
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    if (token) {
        config.headers["Authorization"] = `Token ${token["auth_token"]}`
    }
    return config
}


export const logout = () => (dispatch, getState) => {
    axios.post(URL + '/auth/token/logout/', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_USER,
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: INVALID_TOKEN,
        })
    })
}


export const groupUser = () => (dispatch, getState) => {
    const user = getState().auth.user;
    axios.get(URL + `/api/group/?owner=${user["id"]}`)
        .then(res => {
            dispatch({
                type: DATA_USER,
                payload: res.data

            })
        }).catch(err => console.log(err))
}
export const addGroup = (title, owner) => (dispatch) => {
    axios.post('http://127.0.0.1:8000/api/group/', {title: title["groupName"], owner: owner})
        .then(res => {
            dispatch({
                type: ADD_GROUP,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


export const delGroup = (id) => (dispatch) =>{
    axios.delete(`http://127.0.0.1:8000/api/group/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_GROUP,
            payload: id
        })
    }).catch(err => console.log(err))
}


export const openGroup = (id) => (dispatch) =>{
        axios.get(URL + `/api/task/?group=${id}`)
            .then(res => {
                dispatch({
                    type: OPEN_GROUP,
                    payload: {tasks: res.data, id}

                })
            }).catch(err => console.log(err))
}
export const addTask = (data, id, group) => (dispatch) => {
    axios.post('http://127.0.0.1:8000/api/task/', {
        title: data["title"],
        deadline: data["deadline"]|| null,
        other: data["other"] || null,
        text: null,
        priority: 0,
        owner: id,
        group: group
    })
        .then(res => {
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        }).catch(err => console.log(err))
}
export const delTask = (id) => (dispatch) => {
    axios.delete(`http://127.0.0.1:8000/api/task/${id}`)
        .then(res => {
            dispatch({
                type: DEL_TASK,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const updateTask = (task, id) => (dispatch) => {
    const value = {
        title: task["title"],
        deadline:task["deadline"],
        other:task["other"] ,
        text:task["text"]||null ,
        priority:task["priority"],
        owner:task["owner"],
        group:task["group"],
    }
    axios.put(`http://127.0.0.1:8000/api/task/${id}/`, value).then(res => {
        dispatch({
            type: UPDATE_TASK,
            payload: res.data
        })
    }).catch(err => {console.log(err)})
}
export const updateTaskList = (oldIndex, newIndex ) =>(dispatch) =>{
    dispatch({
        type: UPDATE_TASK_LIST,
        payload: {oldIndex, newIndex}
    })
}
export const getPointList = (taskFather) =>(dispatch) =>{
    axios.get(URL + `/api/point/?taskFather=${taskFather}`)
        .then(res => {
            dispatch({
                type: GET_POINT_LIST,
                payload: res.data

            })
        }).catch(err => console.log(err))
}
export const updatePointList = (oldIndex, newIndex ) =>(dispatch) =>{
    dispatch({
        type: UPDATE_POINT_LIST,
        payload: {oldIndex, newIndex}
    })
}
export const updatePoint = (point) =>(dispatch) =>{
    const value = {
        title: point["title"],
        text: point["text"],
        priority: point["priority"],
        taskFather: point["taskFather"]
    }
    console.log(value)
    axios.put(`http://127.0.0.1:8000/api/point/${point["id"]}/`, value).then(res => {
        dispatch({
            type: UPDATE_POINT,
            payload: res.data
        })
    }).catch(err => {console.log(err)})

}
export const addPoint = (data, id) => (dispatch) => {
    axios.post('http://127.0.0.1:8000/api/point/', {
        "title": data["title"],
        "text": data["text"],
        "priority": 0,
        "taskFather": id
    })
        .then(res => {
            dispatch({
                type: ADD_POINT,
                payload: res.data
            })
        }).catch(err => console.log(err))
}
export const delPoint = (id) => (dispatch) => {
    console.log(id)
    axios.delete(`http://127.0.0.1:8000/api/point/${id}`)
        .then(res => {
            dispatch({
                type: DEL_POINT,
                payload: id
            })
        }).catch(err => console.log(err))
}