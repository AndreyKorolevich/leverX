import React from 'react';
import { useSelector } from 'react-redux';
import vacation from '../../Img/Vacation.png';
import vacationLeave from '../../Img/own expense_new.png';
import sickLeave from '../../Img/Sick Leave_new.png';
import { getOptions, getSelectedOption } from '../../redux/selectors/requestForm-selectors';

function NewRequestBackgraund() {
  const options = useSelector(getOptions);
  const selectedOption = useSelector(getSelectedOption);

  return (
      <header className='main-block-header'>
        {options[selectedOption].value === 'vacation' && <img src={vacation} alt='vacation'/>}
        {options[selectedOption].value === 'vacationLeave' && <img src={vacationLeave} alt='vacation Leave'/>}
        {options[selectedOption].value === 'sickLeave' && <img src={sickLeave} alt='sick Leave'/>}
      </header>
  );
}

export default NewRequestBackgraund;
