import React from 'react';
import moment from 'moment';

function Range({ startDate, endDate, range }) {
  return (
    <>
      <span className='item-data-header__date'>
        {moment(startDate).format('D MMM yyyy')} - {moment(endDate).format('D MMM yyyy')}
      </span>
      <span className='item-data-header__range'>({range} days)</span>
    </>
  );
}

export default Range;
