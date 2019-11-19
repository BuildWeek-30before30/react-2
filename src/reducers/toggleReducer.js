import { TOGGLE_COMPLETE } from '../actions/actions';

const initialState = {
  complete: false
};

export function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return {
        ...state,
        complete: !state.complete
      };
    default:
      return state;
  };
};