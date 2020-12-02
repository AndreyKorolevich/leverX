import React from 'react';
import illustration from '../../Img/Illustration.png';

function NoRequest() {
  return (
        <div className='no-requests'>
          <img src={illustration} alt='illustration list vacations'/>
          <div className='requests-preview'>
            <p className='requests-preview__no-vacation'>No vacation request yet</p>
            <p className='requests-preview__first-request'>
              As soon as you create your first request, you can find it here
            </p>
          </div>
        </div>
  );
}

export default NoRequest;
