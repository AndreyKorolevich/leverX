export const getOptions = (state) => state.requestForm.options;

export const getSelectedOption = (state) => state.requestForm.selectedOption;

export const getRange = (state) => state.requestForm.range;

export const getComment = (state) => state.requestForm.comment;

export const getVacationDays = (state) => state.requestForm.vacationDays;

export const getConstVacationDays = (state) => state.requestForm.constVacationDays;

export const getOwnDays = (state) => state.requestForm.ownDays;

export const getConstOwnDays = (state) => state.requestForm.constOwnDays;

export const getAvalibleDays = (state) => getVacationDays(state) + getOwnDays(state);

export const getStartDate = (state) => state.requestForm.startDate;

export const getEndDate = (state) => state.requestForm.endDate;

export const getMaxDate = (state) => {
  const options = getOptions(state);
  const selectedOption = getSelectedOption(state);
  const { value } = options[selectedOption];
  const start = new Date(state.requestForm.startDate);
  let range;
  switch (value) {
    case 'vacation':
      range = getConstVacationDays(state);
      return start.setDate(start.getDate() + range - 1);
    case 'vacationLeave':
      range = getConstOwnDays(state);
      return start.setDate(start.getDate() + range - 1);
    default:
      return null;
  }
};
