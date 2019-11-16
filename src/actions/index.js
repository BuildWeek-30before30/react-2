import api from '../utils/api';

export const FETCH_LISTS = 'FETCH_LISTS';
export const ADD_LIST = 'ADD_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const FETCH_LIST = 'FETCH_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const fetchLists = () => dispatch => {
  dispatch({ type: FETCH_LISTS })
  api
    .get('/lists')
    .then(response => {
      dispatch({
        type: FETCH_LISTS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 29, error fetching lists');
      alert('There was an error retrieving your list. Please try again.');
    })
};

export const addActivity = newActivity => dispatch => {
  dispatch({ type: ADD_ACTIVITY})
  api
    .post('/lists', newActivity)
    .then(response => {
      dispatch({
        type: ADD_ACTIVITY,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 41, error adding activity');
      alert('There was an arror adding your new activity. Please try again.');
    })
};

export const updateList = updateList => dispatch => {
  dispatch({ type: UPDATE_LIST})
  api
    .put(`/lists/${updateList.id}`, updateList)
    .then(response => {
      dispatch({
        type: UPDATE_LIST,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 56, error updating list');
      alert('There was an error updating your list. Please try again.');
    })
};

export const deleteActivity = deleteActivity => dispatch => {
  dispatch({ type: DELETE_ACTIVITY})
  api
    .delete(`/lists/items/${deleteActivity.id}`, deleteActivity)
    .then(response => {
      dispatch({
        type: DELETE_ACTIVITY,
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error, 'actions/index.js, line 74, error deleting activity');
      alert('There was an error deleting the selected activity. Please try again.');
    })
};
