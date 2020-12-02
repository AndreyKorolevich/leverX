import React from 'react';
import vacation from '../../../../Img/Vacation request.png';
import vacationLeave from '../../../../Img/Own expense.png';
import sickLeave from '../../../../Img/Sick leave.png';

function LogoItemList({ requestType }) {
  return (
    <div className='logo-item'>
      {requestType === 'vacation' && <img src={vacation} alt='item`s list requests icon'/>}
      {requestType === 'vacationLeave' && <img src={vacationLeave} alt='item`s list requests icon'/>}
      {requestType === 'sickLeave' && <img src={sickLeave} alt='item`s list requests icon'/>}
    </div>
  );
}

export default LogoItemList;
