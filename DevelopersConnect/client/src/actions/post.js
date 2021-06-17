import axios from "axios";
import { Redirect } from "react-router-dom";
import { setAlert } from "./alert";
import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

//get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add like
export const addLike = (postid) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postid}`);
    dispatch({ type: UPDATE_LIKES, payload: { postid, likes: res.data } });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//remove like
export const removeLike = (postid) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postid}`);
    dispatch({ type: UPDATE_LIKES, payload: { postid, likes: res.data } });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//delete post
export const deletePost = (postid) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${postid}`);
    dispatch({ type: DELETE_POST, payload: postid });
    dispatch(setAlert("Post removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(`/api/posts/`, formData, config);
    dispatch({ type: ADD_POST, payload: res.data });
    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//get post
export const getPost = (postid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postid}`);
    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add comment
export const addComment = (postid, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postid}`,
      formData,
      config
    );
    dispatch({ type: ADD_COMMENT, payload: res.data });
    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//delete comment
export const deleteComment = (postid, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/comment/${postid}/${commentId}`);
    dispatch({ type: REMOVE_COMMENT, payload: commentId });
    <Redirect to={`/post/${postid}`} />;
    dispatch(setAlert("Comment REMOVED", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
