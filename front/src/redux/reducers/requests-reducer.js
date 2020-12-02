import { SET_REQUESTS, TOGGLE_LOADER } from '../actions/requests-actions';

const initialState = {
  isLoader: false,
  requests: [],
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS:
      return {
        ...state,
        requests: [...action.payload],
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    default:
      return state;
  }
};

export default requestReducer;
