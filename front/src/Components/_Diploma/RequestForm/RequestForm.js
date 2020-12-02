import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from './CostomSelect';
import FormFooter from './FormFooter';
import {
  getComment, getConstOwnDays, getConstVacationDays,
  getEndDate, getMaxDate,
  getOptions,
  getRange,
  getSelectedOption,
  getStartDate,
} from '../../../redux/selectors/requestForm-selectors';
import {
  changeEndDate, changeOwnDays, changeRange,
  changeStardDate,
  changeTextarea,
  selectOption,
} from '../../../redux/action-creators.js/requestForm-action-creators';
import FormRange from './FormRange';
import calculateRange from '../../../Utils/calculateRange';
import { createRequest } from '../../../redux/thunks/requestForm-thunk';
import Modal from '../../Modals/Modal';
import LogoItemList from '../../MyLeaveRequests/ListRequests/ItemList/LogoItemList';
import Range from '../../MyLeaveRequests/ListRequests/ItemList/Range';
import { getOpenModal } from '../../../redux/selectors/modal-selectors';
import { toggleModal } from '../../../redux/action-creators.js/modals-action-creators';

function RequestForm() {
  const options = useSelector(getOptions);
  const selectedOption = useSelector(getSelectedOption);
  const comment = useSelector(getComment);
  const range = useSelector(getRange);
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);
  const maxDate = useSelector(getMaxDate);
  const constVacationDays = useSelector(getConstVacationDays);
  const constOwnDays = useSelector(getConstOwnDays);
  const dispatch = useDispatch();
  const isOpenModal = useSelector(getOpenModal);
  const showWarning = options[selectedOption].value === 'sickLeave';
  const showInputDays = options[selectedOption].value === 'vacation';
  const checkLeave = options[selectedOption].value === 'vacationLeave';

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = {
      startDate,
      endDate,
      comment,
      select: options[selectedOption].value,
    };
    dispatch(createRequest(body));
  };

  const onSelectCnahge = (elem) => {
    dispatch(selectOption(elem.value));
  };

  const onChangeTextarea = (text) => {
    dispatch(changeTextarea(text));
  };

  const setStartDate = (date) => {
    const rangeDate = calculateRange(date, endDate);
    dispatch(changeStardDate(date));
    if (date > endDate) dispatch(changeEndDate(date));
    else if (showInputDays && rangeDate <= constVacationDays) dispatch(changeRange(rangeDate));
    else if (checkLeave && rangeDate <= constOwnDays) dispatch(changeOwnDays(rangeDate));
  };

  const setEndDate = (date) => {
    dispatch(changeEndDate(date));
    const rangeDate = calculateRange(startDate, date);
    if (showInputDays && rangeDate <= constVacationDays) dispatch(changeRange(rangeDate));
    else if (checkLeave && rangeDate <= constOwnDays) dispatch(changeOwnDays(rangeDate));
  };

  return (
    <>
      <form className='request-form' onSubmit={() => dispatch(toggleModal())}>
        <CustomSelect options={options} value={options[selectedOption]} onChange={onSelectCnahge}/>
        {showWarning && <div className='request-form-warning'>
          <span className='warning__important'>Important:</span>
          Please bring the official confirmation of your sick leave from a medical establishment to
          Personnel Officer (Katsiaryna Barysik) as soon as you get it.
        </div>}
        <FormRange range={range} showInputDays={showInputDays} showWarning={showWarning} startDate={startDate}
                   endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} maxDate={maxDate}/>
        <FormFooter value={comment} onChangeTextarea={onChangeTextarea}/>
      </form>
      <Modal isOpen={isOpenModal} onCancel={() => dispatch(toggleModal())} onSubmit={handleSumbit}
             title={options[selectedOption].label}>
        <LogoItemList requestType={options[selectedOption].value}/>
        <Range endDate={endDate} startDate={startDate} range={range}/>
      </Modal>
    </>
  );
}

export default RequestForm;
