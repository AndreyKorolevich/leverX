import { IS_OPEN_MODAL } from '../actions/modals-actions';

const initialState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default modalReducer;
