import React from 'react';
import LogoItemList from './LogoItemList';
import DataItemList from './DataItemList';
import Button from '../../../Common/Button';

function ItemList({
  className, requestType, startDate, endDate, range, created, status, icon, id, openSelectedRequest,
}) {
  return (
    <li className={`${className} item`}>
      <LogoItemList requestType={requestType}/>
      <DataItemList endDate={endDate} startDate={startDate} range={range} created={created} requestType={requestType}
                    status={status}/>
      {icon && <Button className='item-transition' onClick={() => openSelectedRequest(id)}>
        <img className={className} src={icon} alt='item`s list requests transition icon'/>
      </Button>}
    </li>
  );
}

export default ItemList;
