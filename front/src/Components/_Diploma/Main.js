import React from 'react';
import VacationDays from '../VacationDays';
import NewReguest from '../NewRequest/NewReguest';

import MyLeave from '../MyLeaveRequests/MyLeave';

function Main() {
  return (
    <main className='main'>
      <div className='wrapper'>
        <section className='main-section'>
          <VacationDays/>
          <NewReguest/>
        </section>
        <section className='main-section'>
          <MyLeave/>
        </section>
      </div>
    </main>
  );
}

export default Main;
