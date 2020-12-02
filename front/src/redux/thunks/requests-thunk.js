import api from '../../API/api';
import { setRequests, toggleLoader } from '../action-creators.js/requests-action-creators';

// eslint-disable-next-line
export const getAllRequests = () => (dispatch) => {
  dispatch(toggleLoader());
  api.wrapper((data) => {
    dispatch(setRequests(data));
    dispatch(toggleLoader());
  }, '?param=getAllRequests');
};
