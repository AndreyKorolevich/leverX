import React from 'react';

function Hint() {
  return (
    <div className='hint animation-hint'>
      <p>
        The days calculated here are calendar days:
      </p>
      <p className='calendars'>
        Calendar days = Work days + Weekends
      </p>
      <p>
        Number of days can be adjusted by Personnel Officer (Katsiaryna Barysik) in accordance with the current
        legislation.
      </p>
    </div>
  );
}

export default Hint;
