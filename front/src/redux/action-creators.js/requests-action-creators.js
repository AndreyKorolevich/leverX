import { SET_REQUESTS, TOGGLE_LOADER } from '../actions/requests-actions';

export const setRequests = (value) => ({ type: SET_REQUESTS, payload: value });
export const toggleLoader = () => ({ type: TOGGLE_LOADER });
