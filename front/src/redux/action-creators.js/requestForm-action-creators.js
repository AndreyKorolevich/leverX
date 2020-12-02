import {
  SELECT_OPTION, CHANGE_TEXTAREA, CHANGE_START_DATE, CHANGE_END_DATE, CHANGE_RANGE_DAYS,
  CHANGE_OWN_DAYS,
} from '../actions/requestForm-actions';

export const selectOption = (value) => ({ type: SELECT_OPTION, payload: value });
export const changeTextarea = (value) => ({ type: CHANGE_TEXTAREA, payload: value });
export const changeOwnDays = (value) => ({ type: CHANGE_OWN_DAYS, payload: value });
export const changeStardDate = (value) => ({ type: CHANGE_START_DATE, payload: value });
export const changeEndDate = (value) => ({ type: CHANGE_END_DATE, payload: value });
export const changeRange = (value) => ({ type: CHANGE_RANGE_DAYS, payload: value });
