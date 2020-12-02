import React from 'react';
import RequestForm from '../_Diploma/RequestForm/RequestForm';
import NewRequestBackgraund from './NewRequestBackgraund';

function NewRequest() {
  return (
    <section className='main-block'>
     <NewRequestBackgraund/>
      <article className='block-wrapper'>
        <h2 className='main-block__name'>New Request</h2>
        <RequestForm />
      </article>
    </section>
  );
}

export default NewRequest;
