import api from '../utils/api';

export const FETCH_LISTS_START = 'FETCH_LISTS_START';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAIL = 'FETCH_LISTS_FAIL';
export const ADD_LIST_START = 'ADD_LIST_START';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAIL = 'ADD_LIST_FAIL';
export const UPDATE_LIST_START = 'UPDATE_LIST_START';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const UPDATE_LIST_FAIL = 'UPDATE_LIST_FAIL';
export const FETCH_LIST_START = 'FETCH_LIST_START';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL';
export const DELETE_LIST_START = 'DELETE_LIST_START';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const DELETE_LIST_FAIL = 'DELETE_LIST_FAIL';
export const ADD_ACTIVITY_START = 'ADD_ACTIVITY_START';
export const ADD_ACTIVITY_SUCCESS = 'ADD_ACTIVITY_SUCCESS';
export const ADD_ACTIVITY_FAIL = 'ADD_ACTIVITY_FAIL';
export const DELETE_ACTIVITY_START = 'DELETE_ACTIVITY_START';
export const DELETE_ACTIVITY_SUCCESS = 'DELETE_ACTIVITY_SUCCESS';
export const DELETE_ACTIVITY_FAIL = 'DELETE_ACTIVITY_FAIL';
export const UPDATE_ACTIVITY_START = 'UPDATE_ACTIVITY_START';
export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS';
export const UPDATE_ACTIVITY_FAIL = 'UPDATE_ACTIVITY_FAIL';
export const ADD_COMMENT_START = 'ADD_COMMENT_START';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL';
export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAIL = 'DELETE_COMMENT_FAIL';
export const UPDATE_COMMENT_START = 'UPDATE_COMMENT_START';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAIL = 'UPDATE_COMMENT_FAIL';
export const ERROR = 'ERROR';


//GET all lists
export const fetchLists = () => dispatch => {
  dispatch({ type: FETCH_LISTS_START })
  api
    .get('/lists')
    .then(response => {
      dispatch({
        type: FETCH_LISTS_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 29, error fetching lists');
      alert('There was an error retrieving your list. Please try again.');
      dispatch({
        type: FETCH_LISTS_FAIL,
        payload: error.response
      })
    })
};

// GET list by id
export const fetchList = selectedList => dispatch => {
  dispatch({ type: FETCH_LIST_START })
  api
    .get(`/lists/${selectedList.id}`, selectedList)
    .then(response => {
      dispatch({
        type: FETCH_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 29, error fetching lists');
      alert('There was an error retrieving your list. Please try again.');
      dispatch({
        type: FETCH_LIST_FAIL,
        payload: error.response
      })
    })
};

// POST new list
export const addList = newList => dispatch => {
  dispatch({ type: ADD_LIST_START })
  api
    .post('/lists', newList)
    .then(response => {
      dispatch({
        type: ADD_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 67, error adding list');
      alert('There was an error adding a new list. Please try again.');
      dispatch({
        type: ADD_LIST_FAIL,
        payload: error.response
      })
    })
};

// PUT (update/edit) list
export const updateList = updateList => dispatch => {
  dispatch({ type: UPDATE_LIST_START})
  api
    .put(`/lists/${updateList.id}`, updateList)
    .then(response => {
      dispatch({
        type: UPDATE_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 56, error updating list');
      alert('There was an error updating your list. Please try again.');
      dispatch({
        type: UPDATE_LIST_FAIL,
        payload: error.response
      })
    })
};

// DELETE list
export const deleteList = deleteList => dispatch => {
  dispatch({ type: DELETE_LIST_START})
  api
    .delete(`/lists/${deleteList.id}`, deleteList)
    .then(response => {
      dispatch({
        type: DELETE_LIST_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 74, error deleting list');
      alert('There was an error deleting the selected list. Please try again.');
      dispatch({
        type: DELETE_LIST_FAIL,
        payload: error.response
      })
    })
};

// POST (add) activity
export const addActivity = newActivity => dispatch => {
  dispatch({ type: ADD_ACTIVITY_START})
  api
    .post('/lists/:id/items', newActivity)
    .then(response => {
      dispatch({
        type: ADD_ACTIVITY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 41, error adding activity');
      alert('There was an arror adding your new activity. Please try again.');
      dispatch({
        type: ADD_ACTIVITY_FAIL,
        payload: error.response
      })
    })
};

// PUT (update/edit) activity by id
export const updateActivity = updateActivity => dispatch => {
  dispatch({ type: UPDATE_ACTIVITY_START})
  api
    .put(`/lists/:id/items/${updateActivity.id}`, updateActivity)
    .then(response => {
      dispatch({
        type: UPDATE_ACTIVITY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 56, error updating activity');
      alert('There was an error updating the selected activity. Please try again.');
      dispatch({
        type: UPDATE_ACTIVITY_FAIL,
        payload: error.response
      })
    })
};

// DELETE activity by id
export const deleteActivity = deleteActivity => dispatch => {
  dispatch({ type: DELETE_ACTIVITY_START})
  api
    .delete(`/lists/:id/items/${deleteActivity.id}`, deleteActivity)
    .then(response => {
      dispatch({
        type: DELETE_ACTIVITY_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 74, error deleting activity');
      alert('There was an error deleting the selected activity. Please try again.');
      dispatch({
        type: DELETE_ACTIVITY_FAIL,
        payload: error.response
      })
    })
};

// POST (add) comment
export const addComment = newComment => dispatch => {
  dispatch({ type: ADD_COMMENT_START})
  api
    .post('/lists/:id/comments', newComment)
    .then(response => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 41, error adding acomment');
      alert('There was an arror adding your comment. Please try again.');
      dispatch({
        type: ADD_COMMENT_FAIL,
        payload: error.response
      })
    })
};

// PUT (update/edit) comment
export const updateComment = updateComment => dispatch => {
  dispatch({ type: UPDATE_COMMENT_START})
  api
    .put(`/lists/:id/comments/${updateComment.id}`, updateComment)
    .then(response => {
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 56, error editing comment');
      alert('There was an error editing the selected comment. Please try again.');
      dispatch({
        type: UPDATE_COMMENT_FAIL,
        payload: error.response
      })
    })
};

// DELETE comment by id
export const deleteComment = deleteComment => dispatch => {
  dispatch({ type: DELETE_COMMENT_START})
  api
    .delete(`/lists/:id/comments/${deleteComment.id}`, deleteComment)
    .then(response => {
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 74, error deleting comment');
      alert('There was an error deleting the selected comment. Please try again.');
      dispatch({
        type: DELETE_COMMENT_FAIL,
        payload: error.response
      })
    })
};