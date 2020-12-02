import {
  CHANGE_TEXTAREA, SELECT_OPTION, CHANGE_OWN_DAYS,
  CHANGE_START_DATE, CHANGE_END_DATE, CHANGE_RANGE_DAYS,
} from '../actions/requestForm-actions';

const initialState = {
  options: [
    { value: 'vacation', label: 'Vacation' },
    { value: 'vacationLeave', label: 'Vacation leave' },
    { value: 'sickLeave', label: 'Sick leave' },
  ],
  selectedOption: 0,
  startDate: new Date(),
  endDate: new Date(),
  range: 1,
  comment: '',
  vacationDays: 27,
  ownDays: 120,
  constVacationDays: 28,
  constOwnDays: 120,
};

const requestFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        selectedOption: state.options.findIndex((e) => e.value === action.payload),
      };
    case CHANGE_TEXTAREA:
      return {
        ...state,
        comment: action.payload,
      };
    case CHANGE_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case CHANGE_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case CHANGE_RANGE_DAYS:
      return {
        ...state,
        range: action.payload,
        vacationDays: state.constVacationDays - action.payload,
      };
    case CHANGE_OWN_DAYS:
      return {
        ...state,
        ownDays: state.constOwnDays - action.payload,
      };
    default:
      return state;
  }
};

export default requestFormReducer;
