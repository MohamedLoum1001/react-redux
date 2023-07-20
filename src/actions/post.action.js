import axios from "axios";

export const GET_POSTS = "GET_POSTS"
export const ADD_POST = "ADD_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const ADD_POST_LIKE = "ADD_POST_LIKE "

export const getPosts = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/posts').then((res) => {
            console.log(res.data);
            dispatch({ type: GET_POSTS, payload: res.data })
        })
    }
}
// ADD Post
export const addPost = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3000/posts', data).then((res) => {
            console.log(res.data);
            dispatch({ type: ADD_POST, payload: data })
        })
    }
}
// Edit Post
export const editPost = (data) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
            console.log(res.data);
            dispatch({ type: EDIT_POST, payload: data });
        })
    }
}
// DELELTE Post
export const deletePost = (postId) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3000/posts/${postId}`).then((res) => {
            console.log(res.data);
            dispatch({ type: DELETE_POST, payload: postId })
        })
    }
}
// LIKE Post
export const addPostLike = (data) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3000/posts/${data.id}`, data).then((res) => {
            console.log(res.data);
            dispatch({ type: ADD_POST_LIKE, payload: data })
        })
    }
}