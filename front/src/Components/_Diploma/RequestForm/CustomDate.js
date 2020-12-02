import React from 'react';
import { enGB } from 'date-fns/esm/locale';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

function CustomDate({
  label, className, minDate, startDate, setDate, maxDate,
}) {
  registerLocale('en-GB', enGB);
  return (
    <div className='custom-date'>
      <div>
        <span className='custom-date__position'>{label} Date </span>
        <span className='custom-date__inclusive'>(inclusive)</span>
      </div>
      <DatePicker className={`date ${className}`} dateFormat='dd MMM yyyy' selected={startDate}
                  onChange={(date) => setDate(date)} popperClassName='custom-class' maxDate={maxDate}
                  minDate={minDate} locale='en-GB'/>
    </div>
  );
}

CustomDate.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  minDate: PropTypes.object,
  startDate: PropTypes.object,
  setDate: PropTypes.func,
  maxDate: PropTypes.number,
};

export default CustomDate;
