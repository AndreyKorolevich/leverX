import React from 'react';
import Range from './Range';

function DataItemList({
  requestType, startDate, endDate, range, created, status,
}) {
  return (
      <div className='item-data'>
        <header className='item-data-header'>
          <span className='item-data-header__type'>
            {requestType === 'vacation' && 'Vacation:'}
            {requestType === 'sickLeave' && 'Sick leave:'}
            {requestType === 'vacationLeave' && 'Own expense leave:'}
          </span>
          <Range startDate={startDate} endDate={endDate} range={range}/>
        </header>
        <main className='item-data-main'>
          <span className='item-data-main__created'>Created: {created}</span>
        </main>
        <footer className='item-data-footer'>
          <span className='item-data-footer__status'>{status}</span>
        </footer>
      </div>
  );
}

export default DataItemList;
