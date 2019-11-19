import {
  SET_LOADING,
  FETCH_LISTS_START,
  FETCH_LISTS_SUCCESS,
  FETCH_LIST_START,
  FETCH_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
  UPDATE_LIST_SUCCESS,
  DELETE_LIST_SUCCESS,
  ADD_ITEM_SUCCESS,
  DELETE_ITEM_SUCCESS,
  UPDATE_ITEM_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  ERROR,
  SET_CURRENT_ITEM,
  CLEAR_CURRENT_ITEM
} from '../actions/actions';

const initialState = {
  list: [],
  lists: [],
  items: [],
  comments: [],
  loading: false,
  error: '',
  current: null
};



export const itemReducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_START:
    return {
      ...state,
      fetchLists: true,
      loading: true
    };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        fetchLists: false,
        loading: false
    };
    case FETCH_LIST_START:
      return {
        ...state,
        fetchList: true,
        loading: true
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        fetchList: false,
        loading: false
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
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [
          state.items,
          action.payload
        ]
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item =>
          item.id !== action.payload)
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
          ? action.payload
          : item)
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
      console.log(action.payload, 'reducers, line 123, error');
      return {
        ...state,
        fetchLists: false,
        fetchList: false,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_ITEM:
      return {
        ...state,
        current: null
      }
    default:
      return {
        ...state
      };
  };
};

export default itemReducer;