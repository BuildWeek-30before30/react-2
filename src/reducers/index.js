import {
  FETCH_LISTS_START,
  FETCH_LISTS_SUCCESS,
  FETCH_LIST_START,
  FETCH_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
  UPDATE_LIST_SUCCESS,
  DELETE_LIST_SUCCESS,
  ADD_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  ERROR
} from '../actions/index';

const initialState = {
  list: [],
  lists: [],
  items: [],
  comments: [],
  fetchLists: false,
  fetchList: false,
  error: ''
};

export const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_START:
    return {
      ...state,
      fetchLists: true
    };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        fetchLists: false
    };
    case FETCH_LIST_START:
      return {
        ...state,
        fetchList: true
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        fetchList: false
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        lists: [
          ...state.lists,
          action.payload
        ]
      };
    case UPDATE_LIST_SUCCESS:
      return {
        ...state,
        lists: state.lists.map(list =>
          list.id === action.payload.id
          ? action.payload
          : list)
      };
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter(list =>
          list.id !== action.payload)
      };
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        list: [
          state.items,
          action.payload
        ]
      };
    case DELETE_ACTIVITY_SUCCESS:
      return {
        ...state,
        items: state.items.filter(itemId =>
          itemId.id !== action.payload)
      };
    case UPDATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        items: state.items.map(itemId =>
          itemId.id === action.payload.id
          ? action.payload
          : itemId)
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          state.comments,
          action.payload
        ]
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [
          state.comments.map(commentId =>
            commentId.id === action.payload.id
            ? action.payload
            : commentId)
        ]
      };
      case DELETE_COMMENT_SUCCESS:
        return {
          ...state,
          comments: state.comments.filter(commentId =>
            commentId.id !== action.payload)
        };
    case ERROR:
      return {
        ...state,
        fetchLists: false,
        fetchList: false,
        error: action.payload
      }
    default:
      return {
        ...state
      };
  };
};

export default reducer;