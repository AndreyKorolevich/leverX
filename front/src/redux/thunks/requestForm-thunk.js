import api from '../../API/api';
import { setRequests, toggleLoader } from '../action-creators.js/requests-action-creators';
import { toggleModal } from '../action-creators.js/modals-action-creators';

// eslint-disable-next-line
export const createRequest = (body) => (dispatch) => {
  dispatch(toggleLoader());
  api.wrapper((data) => {
    if (data.type === 'validError') {
      dispatch(toggleModal());
    } else if (data.type === 'create') {
      dispatch(setRequests(data.data));
      dispatch(toggleLoader());
      dispatch(toggleModal());
    }
  }, '?param=createRequest', 'POST', JSON.stringify(body));
};
