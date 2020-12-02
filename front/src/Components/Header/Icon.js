import React from 'react';

function Icon({ src, className }) {
  return (
   <div className={className}>
     <img src={src}/>
   </div>
  );
}

export default Icon;
