import React from 'react';
import Input from '../../Common/Input';
import CustomDate from './CustomDate';
import Question from './Question';
import PropTypes from 'prop-types';

function FormRange({
  range, showInputDays, showWarning, startDate, endDate, setEndDate, setStartDate, maxDate,
}) {
  return (
      <div className='request-form-range'>
        <CustomDate label='Start' className={showInputDays ? 'short-date' : 'long-date'}
                    minDate={new Date('01/01/2018')} startDate={startDate} setDate={setStartDate}/>
        <CustomDate label={showWarning ? 'Expected End' : 'End'} startDate={endDate} maxDate={maxDate}
                    className={showInputDays ? 'short-date' : 'long-date'} minDate={startDate} setDate={setEndDate}/>

        {showInputDays
        && <Input value={range} className='request-form-count' label='Day(s)'>
          <Question/>
        </Input>}
      </div>
  );
}

FormRange.propTypes = {
  range: PropTypes.number,
  showInputDays: PropTypes.bool,
  showWarning: PropTypes.bool,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  setEndDate: PropTypes.func,
  setStartDate: PropTypes.func,
};

export default FormRange;
