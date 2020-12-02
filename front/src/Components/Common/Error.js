import React from 'react';

function Error({ text, target }) {
  return (
    <div className='form-error' data-id='error' style={{ left: `${window.scrollX + target.offsetWidth + 15}px` }}>
      {text}
    </div>
  );
}

export default Error;
